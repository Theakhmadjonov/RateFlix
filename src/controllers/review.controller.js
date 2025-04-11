import ReviewService from "../services/review.service.js";

class ReviewController {
  constructor() {
    this.reviewService = new ReviewService();
  }

  async createReviewController(req, res, next) {
    try {
      const data = req.body;
      const review = await this.reviewService.createReview(data);
      res.status(201).json({
        message: "Success",
        data: review,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllReviewsController(req, res, next) {
    try {
      const reviews = await this.reviewService.getAllReview();
      res.status(201).json({
        message: "Success",
        data: reviews,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOneReviewController(req, res, next) {
    try {
        const { id } = req.params;
      const review = await this.reviewService.getOneReview(id);
      res.status(201).json({
        message: "Success",
        data: review,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateReviewController(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const review = await this.reviewService.updateReview(id, data);
      res.status(201).json({
        message: "Success",
        data: review,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteReviewController(req, res, next) {
    try {
      const { id } = req.params;
      const review = await this.reviewService.deletereview(id);
      res.status(201).json({
        message: "Success",
        data: review,
      });
    } catch (error) {
      next(error);
    }
  }
}
export default ReviewController;
