import ReviewModel from "../models/reviews.model.js";
import CustomError from "../utils/custom.error.js";

class ReviewService {
  constructor() {
    this.reviewModel = ReviewModel;
  }

  async createReview(data) {
    try {
      const review = await this.reviewModel.create(data);
      return review;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async getAllReview() {
    try {
      const reviews = await this.reviewModel
        .find()
        .populate("movies_id", "title duration release_date")
        .populate("users_id", "username email");
      return reviews;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async getOneReview(id) {
    try {
      const review = await this.reviewModel
        .findById(id)
        .populate("movies_id", "title duration release_date")
        .populate("users_id", "username email");
      if (!review) {
        throw new CustomError("Review not found", 404);
      }
      return review;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async updateReview(id, data) {
    try {
      const updatedReview = await this.reviewModel
        .findByIdAndUpdate(id, data, { new: true })
        .populate("movies_id", "title duration release_date")
        .populate("users_id", "username email");

      if (!updatedReview) {
        throw new CustomError("Review not found", 404);
      }
      return updatedReview;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
  async deletereview(id) {
    try {
      const deletedReview = await this.reviewModel.findByIdAndDelete(id);
      if (!deletedReview) {
        throw new CustomError("Review not found", 404);
      }
      return deletedReview;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}
export default ReviewService;
