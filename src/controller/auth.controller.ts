import { NextFunction, Request, Response } from "express";
import * as AuthService from "../service/auth.service";

/**
 * Handles user login.
 * @param {Request} req - Request object.
 * @param {Response} res - Response object.
 */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { body } = req;
    const data = await AuthService.login(body);
    if (!data) return "Invalid email or password";
    res.json(data);
  } catch (error) {
    next(error);
  }
}
