import userRouter from "./users.js";
import postRouter from "./posts.js";
export default (app) => {
  userRouter(app);
  postRouter(app);
};
