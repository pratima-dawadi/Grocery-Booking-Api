export interface IOrder {
  id: string;
  userId: string;
  groceryId: string;
  orderQuantity: string;
  totalPrice: string;
}
export interface IOrder2 {
  id: number;
  userId: number;
  groceryId: number;
  orderQuantity: number;
  totalPrice?: number;
}
