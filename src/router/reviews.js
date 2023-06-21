import { Router } from "express";
import ReviewController from "../controller/reviews.js";

export default (app) => {
  const reviewControllerInstance = new ReviewController();
  const router = Router({ mergeParams: true });
  router.post("/", (req, res, next) =>
    reviewControllerInstance.createReview(req, res, next)
  );
  return router;
};
