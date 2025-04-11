import UsersModel from "../models/users.model.js";
import CustomError from "../utils/custom.error.js";

class UserService {
  constructor() {
    this.usersModel = UsersModel;
  }

  async addUser(data) {
    try {
      const user = await this.usersModel.create(data);
      return user;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async getAllUsers() {
    try {
      const users = await this.usersModel.find();
      return users;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async getOneUser(id) {
    try {
      const user = await this.usersModel.findById(id);
      if (!user) {
        throw new CustomError("User not found", 404);
      }
      return user;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async updateUser(id, data) {
    try {
      const updatedUser = await this.usersModel.findByIdAndUpdate(id, data, {
          new: true,
          runValidators: true, 
      });
      if (!updatedUser) {
        throw new CustomError("User not found", 404);
      }
      return updatedUser;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async deleteUser(id) {
    try {
      const deletedUser = await this.usersModel.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new CustomError("User not found", 404);
      }
      return deletedUser;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}

export default UserService;
