import CategoryService from "../services/category.service.js";

class CategoryController {
  constructor() {
    this.categoryService = new CategoryService();
  }

  async addCategoryController(req, res, next) {
    try {
      const data = req.body;
      const category = await this.categoryService.addCategory(data);
      res.status(201).json({
        message: "Success",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllCategoriesController(req, res, next) {
    try {
      const categorys = await this.categoryService.getAllCategories();
      res.status(201).json({
        message: "Success",
        data: categorys,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOneCategoryController(req, res, next) {
    try {
      const { id } = req.params;
      const category = await this.categoryService.getOneCategory(id);
      res.status(201).json({
        message: "Success",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCategoryController(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedCategory = await this.categoryService.updateCategory(
        id,
        data
      );
      res.status(201).json({
        message: "Category successfully updated",
        data: updatedCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteCategoryController(req, res, next) {
    try {
      const { id } = req.params;
      const deletedCategory = await this.categoryService.deleteCategory(id);
      res.status(201).json({
        message: "Category successfully deleted",
        data: deletedCategory,
      });
    } catch (error) {
      next(error);
    }
  }
}
export default CategoryController;
