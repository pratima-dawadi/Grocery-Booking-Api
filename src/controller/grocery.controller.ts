import { NextFunction, Request, Response } from "express";

import * as GroceryService from "../service/grocery.service";

export async function createGrocery(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;
    const data = await GroceryService.createGrocery(body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function getGroceries(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await GroceryService.getGroceries();
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function updateGrocery(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body, params } = req;
    const data = await GroceryService.updateGrocery(body, params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function deleteGrocery(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params } = req;
    const data = await GroceryService.deleteGrocery(params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
