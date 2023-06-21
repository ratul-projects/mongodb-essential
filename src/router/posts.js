import { Router } from "express";
import PostController from "../controller/posts.js";
import reviewRouter from "./reviews.js";
const router = Router();
export default (app) => {
  const postControllerInstance = new PostController();
  const reviewRoute = reviewRouter(app);
  app.use("/posts", router);
  app.use("/posts/:postId/review", reviewRoute);
  router.post("/", (req, res, next) =>
    postControllerInstance.createPost(req, res, next)
  );
  router.get("/:id", (req, res, next) =>
    postControllerInstance.getPostDetailsById(req, res, next)
  );
};
