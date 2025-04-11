import express from "express";
import "dotenv/config";
import connectDb from "./config/db.js";
import Routes from "./routes/routes.js";
import ErrorMiddleware from "./middleware/error.middleware.js";

const app = express();
app.use(express.json());
app.use("/api", Routes());
app.use(ErrorMiddleware);
const PORT = process.env.PORT || 8080;

const init = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => console.log(`Server is running port ${PORT}`));
  } catch (error) {
    app.close();
    process.exit(error);
  }
};
init();
