import { Grocery } from "../interfaces/grocery.interface";
import * as GroceryModel from "../model/grocery.model";

export async function createGrocery(body: Grocery) {
  const result = GroceryModel.GroceryModel.createGrocery(body);
  return result;
}

export async function getGroceries() {
  return GroceryModel.GroceryModel.getAllGroceries();
}

export async function updateGrocery(body: Grocery, id: string) {
  const result = GroceryModel.GroceryModel.updateGrocery(body, id);
  return result;
}

export async function deleteGrocery(id: string) {
  const result = GroceryModel.GroceryModel.deleteGrocery(id);
  return result;
}
