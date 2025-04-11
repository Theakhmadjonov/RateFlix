import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    movies_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "movies",
    },
    users_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    comment: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ReviewModel = mongoose.model("reviews", ReviewSchema);
export default ReviewModel;
