import categoryRouter from "./category.route.js";
import movieRouter from "./movie.route.js";
import reviewRouter from "./review.route.js";
import userRouter from "./users.route.js";

const Routes = () => [movieRouter, userRouter, categoryRouter, reviewRouter];
export default Routes;