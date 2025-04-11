import mongoose from "mongoose";
const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_admin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UsersModel = mongoose.model("users", UsersSchema);
export default UsersModel;
