import UsersService from "../services/users.service.js";

class UsersController{
    constructor() {
        this.usersService = new UsersService();
    }
    
    async addUserController(req, res, next) {
        try {
            const data = req.body;
            const user = await this.usersService.addUser(data);
            res.status(201).json({
                message: "Success",
                data: user,
            });
        } catch (error) {
            next(error);
        }
    }

    async getAllUsersController(req, res, next) {
        try {
            const users = await this.usersService.getAllUsers();
            res.status(201).json({
                message: "Success",
                data: users,
            });
        } catch (error) {
            next(error);
        }
    }

    async getOneUserController(req, res, next) {
        try {
            const { id } = req.params;
            const user = await this.usersService.getOneUser(id);
            res.status(201).json({
                message: "Success",
                data: user,
            });
        } catch (error) {
            next(error);
        }
    }

    async updateUserController(req, res, next) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updatedUser = await this.usersService.updateUser(id, data);
            res.status(201).json({
                message: "User successfully updated",
                data: updatedUser,
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteUserController(req, res, next) {
        try {
            const { id } = req.params;
            const deletedMovie = await this.usersService.deleteUser(id);
            res.status(201).json({
                message: "User successfully deleted",
                data: deletedMovie,
            });
        } catch (error) {
            next(error);
        }
    }
}
export default UsersController;