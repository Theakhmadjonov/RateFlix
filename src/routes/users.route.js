import { Router } from "express";
import UsersController from "../controllers/users.controller.js";

const userRouter = Router();

const controller = new UsersController();

userRouter.post("/user", controller.addUserController.bind(controller));

userRouter.get("/user", controller.getAllUsersController.bind(controller));

userRouter.get("/user/:id", controller.getOneUserController.bind(controller));

userRouter.put("/user/:id", controller.updateUserController.bind(controller));

userRouter.delete("/user/:id", controller.deleteUserController.bind(controller));

export default userRouter;
