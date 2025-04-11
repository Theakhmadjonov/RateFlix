import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    _v: false,
  }
);
const CategoryModel = mongoose.model("category", CategorySchema);
export default CategoryModel;
