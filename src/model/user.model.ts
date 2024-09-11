import { User } from "../interfaces/user.interfaces";
import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
  /**
   * Function `createUser`- creates a new user in a database table and assigns permissions to the user for various actions
   * @param {User} user - responsible for creating a new userin a database along with setting permissions for that user
   */
  static async createUser(user: User) {
    try {
      const userToCreate = {
        name: user.name,
        email: user.email,
        password: user.password,
        role: "user",
      };

      const query = await this.queryBuilder()
        .insert(userToCreate)
        .into("users");

      return "User created successfully";
    } catch (error) {
      return error;
    }
  }

  static async getallUsers() {
    const query = this.queryBuilder().select("*").table("users");
    const user = await query;
    return user;
  }

  static async getUserByEmail(email: string) {
    const query = this.queryBuilder()
      .select("*")
      .from("users")
      .where("email", email)
      .first();
    const user = await query;
    return user;
  }

  static async getUserPermissions(id: string) {
    const query = this.queryBuilder()
      .select("role")
      .table("users")
      .where({ id: +id })
      .first();
    const data = await query;
    return data.role;
  }
}

export const users: User[] = [];
