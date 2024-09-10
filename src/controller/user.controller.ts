import { NextFunction, Request, Response } from "express";

import * as UserService from "../service/user.service";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = req;
    const data = await UserService.createUser(body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await UserService.getUsers();
    res.json(data);
  } catch (error) {
    next(error);
  }
}
