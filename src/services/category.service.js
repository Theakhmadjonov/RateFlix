import CategoryModel from "../models/categories.model.js";
import CustomError from "../utils/custom.error.js";

class CategoryService {
  constructor() {
    this.categoryModel = CategoryModel;
  }

  async addCategory(data) {
    try {
      const category = await this.categoryModel.create(data);
      return category;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async getAllCategories() {
    try {
      const categorys = await this.categoryModel.find();
      return categorys;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async getOneCategory(id) {
    try {
      const category = await this.categoryModel.findById(id);
      if (!category) {
        throw new CustomError("Category not found", 404);
      }
      return category;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async updateCategory(id, data) {
    try {
      const updatedcategory = await this.categoryModel.findByIdAndUpdate(
        id,
        data,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedcategory) {
        throw new CustomError("Category not found", 404);
      }
      return updatedcategory;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async deleteCategory(id) {
    try {
      const deletedcategory = await this.categoryModel.findByIdAndDelete(id);
      if (!deletedcategory) {
        throw new CustomError("category not found", 404);
      }
      return deletedcategory;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}
export default CategoryService;
