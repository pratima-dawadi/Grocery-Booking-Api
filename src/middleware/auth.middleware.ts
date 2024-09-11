import { JwtPayload, verify } from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { Request } from "../interfaces/auth.interface";
import config from "../config";
import { User } from "../interfaces/user.interfaces";
import { UserModel } from "../model/user.model";

/**
 * The function `auth` checks for a valid Bearer token in the request headers for authentication.
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Callback Function
 * @returns Return an error message if the token is invalid or missing. Otherwise, it will call the next middleware.
 */
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authorization.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const user = verify(token[1], config.jwt.secret!) as User;
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token not valid" });
  }
}

export function authorize(permission: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!;
    try {
      const userPermission = await UserModel.getUserPermissions(user.id);

      if (!userPermission.includes(permission)) {
        return res.status(401).json({ message: "Permission denied" });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: "Failed to authorize user" });
    }
  };
}
