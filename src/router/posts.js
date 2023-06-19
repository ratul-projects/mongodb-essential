import { Router } from "express";
import PostController from "../controller/posts.js";
const router = Router();
export default (app) => {
  const postControllerInstance = new PostController();
  app.use("/posts", router);
  router.post("/", (req, res, next) =>
    postControllerInstance.createPost(req, res, next)
  );
};
