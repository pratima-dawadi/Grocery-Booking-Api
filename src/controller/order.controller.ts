import * as orderService from "../service/order.service";
import { NextFunction, Response } from "express";
import { Request } from "../interfaces/auth.interface";

export async function getOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.user?.id;
    const data = await orderService.getOrders(userId!);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function createOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;
    const userId = req.user?.id;
    const data = await orderService.createOrder(body, userId!);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function createMultipleOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;
    const userId = req.user?.id;
    const data = await orderService.createMultipleOrders(body, userId!);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
