import { IOrder, IOrder2 } from "../interfaces/order.interface";
import { BaseModel } from "./base.model";

export class orderModel extends BaseModel {
  static async createOrder(body: IOrder, userId: string) {
    // try {
    const getPrice = await this.queryBuilder()
      .select("price", "name")
      .from("grocery")
      .where("id", +body.groceryId)
      .first();

    if (!getPrice) {
      throw new Error("Grocery item not found");
    }

    const totalPrice = getPrice.price * +body.orderQuantity;

    const groceryToOrder = {
      user_id: +userId,
      grocery_id: +body.groceryId,
      order_quantity: +body.orderQuantity,
      total_price: totalPrice,
    };

    const query = await this.queryBuilder()
      .insert(groceryToOrder)
      .into("order");

    if (query) {
      const getQuantity = this.queryBuilder()
        .select("quantity")
        .table("grocery")
        .where("id", +body.groceryId)
        .first();

      const quantity = await getQuantity;

      const updateQuantity = +quantity.quantity - +body.orderQuantity;

      const query2 = this.queryBuilder()
        .update({ quantity: +updateQuantity })
        .table("grocery")
        .where("id", +body.groceryId);
      const result = await query2;
    }
    return {
      message: "Order placed successfully",
      orderedGrocery: {
        groceryId: body.groceryId,
        groceryName: getPrice.name,
        orderQuantity: body.orderQuantity,
        totalPrice: totalPrice,
      },
    };
  }

  static async getOrders(userId: string) {
    const query = this.queryBuilder()
      .select("*")
      .table("order")
      .where("userId", +userId);
    const grocery = await query;
    if (!grocery) {
      return "No orders found";
    }
    return grocery;
  }

  static async createMultipleOrders(
    body: { items: IOrder2[] },
    userId: string
  ) {
    try {
      const orders: {
        groceryId: number;
        groceryName: string;
        orderQuantity: number;
        totalPrice: number;
      }[] = [];

      for (const item of body.items) {
        console.log(item);
        const groceryId = Number(item.groceryId);
        const orderQuantity = Number(item.orderQuantity);

        const getPrice = await this.queryBuilder()
          .select("price", "name", "quantity")
          .from("grocery")
          .where("id", +item.groceryId)
          .first();

        if (!getPrice) {
          throw new Error(`Grocery item with ID ${groceryId} not found`);
        }

        if (getPrice.quantity < orderQuantity) {
          throw new Error(
            `Not enough stock for grocery item ${getPrice.name}, available: ${getPrice.quantity}`
          );
        }

        const totalPrice = getPrice.price * orderQuantity;

        const groceryToOrder = {
          user_id: Number(userId),
          grocery_id: groceryId,
          order_quantity: orderQuantity,
          total_price: totalPrice,
        };

        await this.queryBuilder().insert(groceryToOrder).into("order");

        await this.queryBuilder()
          .update({ quantity: getPrice.quantity - orderQuantity })
          .from("grocery")
          .where("id", +groceryId);

        orders.push({
          groceryId,
          groceryName: getPrice.name,
          orderQuantity,
          totalPrice,
        });
      }

      return {
        message: "Orders placed successfully",
        orderedGroceries: orders,
      };
    } catch (error) {
      console.error(error);
      return { message: `Error placing orders:` };
    }
  }
}
