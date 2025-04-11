import mongoose, { Schema } from "mongoose";

const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    release_year: {
      type: Number,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "categories",
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const MovieModel = mongoose.model("movies", MovieSchema);
export default MovieModel;
