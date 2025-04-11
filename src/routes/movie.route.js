import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const movieRouter = Router();

const controller = new MovieController();

movieRouter.post("/movie", controller.addMovieController.bind(controller));

movieRouter.get("/movie", controller.getAllMovieController.bind(controller));

movieRouter.get("/movie/:id", controller.getOneMovieController.bind(controller));

movieRouter.put("/movie/:id", controller.updateMovieController.bind(controller));

movieRouter.delete("/movie/:id", controller.deleteMovieController.bind(controller));

export default movieRouter;
