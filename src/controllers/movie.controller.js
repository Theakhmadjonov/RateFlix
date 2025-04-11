import MovieService from "../services/movie.service.js";

class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }
  async addMovieController(req, res, next) {
    try {
      const data = req.body;
      const movie = await this.movieService.addMovie(data);
      res.status(201).json({
        message: "Success",
        data: movie,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllMovieController(req, res, next) {
    try {
      const movies = await this.movieService.getAllMovie();
      res.status(201).json({
        message: "Success",
        data: movies,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOneMovieController(req, res, next) {
    try {
      const { id } = req.params;
      const movie = await this.movieService.getOneMovie(id);
      res.status(201).json({
        message: "Success",
        data: movie,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateMovieController(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedMovie = await this.movieService.updateMovie(id, data);
      res.status(201).json({
        message: "Movie successfully updated",
        updatedMovie,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteMovieController(req, res, next) {
    try {
      const { id } = req.params;
      const deletedMovie = await this.movieService.deleteMovie(id);
      res.status(201).json({
        message: "Success",
        data: deletedMovie,
      });
    } catch (error) {
      next(error);
    }
  }
}
export default MovieController;
