import ReviewModel from "../model/reviews.model.js";
export default class ReviewController {
  _reviewModel;

  constructor() {
    this._reviewModel = new ReviewModel();
  }

  async createReview(req, res, next) {
    try {
      console.log(req.params);
      const { postId } = req.params;
      const { title, comment, rating } = req.body;
      const createdReview = await this._reviewModel.create({
        postId,
        title,
        comment,
        rating,
      });
      return res.status(200).json({ success: true, data: createdReview });
    } catch (err) {
      return res.status(500).json({ success: false, error: err });
    }
  }
}
