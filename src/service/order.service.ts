import { IOrder, IOrder2 } from "../interfaces/order.interface";
import * as orderModel from "../model/order.model";

export async function getOrders(userId: string) {
  return orderModel.orderModel.getOrders(userId);
}

export async function createOrder(body: IOrder, userId: string) {
  return orderModel.orderModel.createOrder(body, userId);
}

export async function createMultipleOrders(body: IOrder2[], userId: string) {
  return orderModel.orderModel.createMultipleOrders({ items: body }, userId);
}
