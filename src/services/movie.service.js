import MovieModel from "../models/movie.model.js";
import CustomError from "../utils/custom.error.js";

class MovieService {
  constructor() {
    this.movieModel = MovieModel;
  }
  async addMovie(data) {
    try {
      const movie = await this.movieModel.create(data);
      return movie;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async getAllMovie() {
    try {
      const movie = await this.movieModel.find().populate("categories_id", "name");
      return movie;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async getOneMovie(id) {
    try {
      const movie = await this.movieModel.findById(id).populate("categories_id", "name");
      if (!movie) {
        throw new CustomError("Movie not found", 404);
      }
      return movie;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async updateMovie(id, data) {
    try {
      const updatedMovie = await this.movieModel.findByIdAndUpdate(id, data, {
        new: true, 
        runValidators: true, 
      }).populate("categories_id", "name");
      if (!updatedMovie) {
        throw new CustomError("Movie not found", 404);
      }
      return updatedMovie;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async deleteMovie(id) {
    try {
      const deletedMovie = await this.movieModel.findByIdAndDelete(id);
      if (!deletedMovie) {
        throw new CustomError("Movie not found", 404);
      }
      return deletedMovie;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}
export default MovieService;
