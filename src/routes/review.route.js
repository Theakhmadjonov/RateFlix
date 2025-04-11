import { Router } from "express";
import ReviewController from "../controllers/review.controller.js";

const reviewRouter = Router();

const controller = new ReviewController();

reviewRouter.post("/review", controller.createReviewController.bind(controller));

reviewRouter.get("/review", controller.getAllReviewsController.bind(controller));

reviewRouter.get("/review/:id", controller.getOneReviewController.bind(controller));

reviewRouter.put("/review/:id", controller.updateReviewController.bind(controller));

reviewRouter.delete("/review/:id", controller.deleteReviewController.bind(controller));

export default reviewRouter;
