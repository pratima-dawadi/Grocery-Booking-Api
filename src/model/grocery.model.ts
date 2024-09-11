import { Grocery } from "../interfaces/grocery.interface";
import { BaseModel } from "./base.model";

export class GroceryModel extends BaseModel {
  static async createGrocery(body: Grocery) {
    try {
      const groceryToCreate = {
        name: body.name,
        price: +body.price,
        quantity: +body.quantity,
      };

      const query = await this.queryBuilder()
        .insert(groceryToCreate)
        .into("grocery");
      return "Grocery created successfully";
    } catch (error) {
      return error;
    }
  }

  static async getAllGroceries() {
    const query = this.queryBuilder().select("*").table("grocery");
    const grocery = await query;
    return grocery;
  }

  static async updateGrocery(body: Grocery, id: string) {
    const groceryToUpdate = {
      name: body.name,
      price: +body.price,
      quantity: +body.quantity,
    };
    const query = this.queryBuilder()
      .update(groceryToUpdate)
      .table("grocery")
      .where("id", id);
    if (!query) {
      return "Grocery not found";
    }
    return "Grocery updated successfully";
  }

  static async deleteGrocery(id: string) {
    const query = await this.queryBuilder()
      .delete()
      .from("grocery")
      .where("id", +id);
    if (query === 0) {
      return "Grocery not found";
    }

    return "Grocery deleted successfully";
  }
}
