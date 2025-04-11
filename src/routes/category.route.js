import { Router } from "express";
import CategoryController from "../controllers/category.controller.js";

const categoryRouter = Router();

const controller = new CategoryController();

categoryRouter.post("/category", controller.addCategoryController.bind(controller));

categoryRouter.get("/category", controller.getAllCategoriesController.bind(controller));

categoryRouter.get("/category/:id", controller.getOneCategoryController.bind(controller));

categoryRouter.put("/category/:id", controller.updateCategoryController.bind(controller));

categoryRouter.delete("/category/:id", controller.deleteCategoryController.bind(controller));

export default categoryRouter;
