import { User } from "../interfaces/user.interfaces";
import * as userModel from "../model/user.model";
import bcrypt from "bcrypt";

export async function createUser(user: User) {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  const result = userModel.UserModel.createUser(user);
  return result;
}

export function getUsers() {
  return userModel.UserModel.getallUsers();
}
