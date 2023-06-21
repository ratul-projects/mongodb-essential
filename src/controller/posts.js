import PostsModel from "../model/posts.model.js";
export default class PostController {
  _postModel;
  constructor() {
    this._postModel = new PostsModel();
  }
  async createPost(req, res, next) {
    try {
      const { title, description, tags } = req.body;
      const createdPost = await this._postModel.create({
        title,
        description,
        tags,
        createdBy: "648c7b9fcceae298a1aa0c48",
        createdAt: new Date(),
      });
      return res.json({ status: "success", data: createdPost });
    } catch (err) {
      res.json({ status: "error", error: err.message });
    }
  }

  async getPostDetailsById(req, res, next) {
    try {
      const { postId } = req.params;
      const postDetails = await this._postModel.getPostDetailsById(postId);
      return res.status(200).json({ status: "success", data: postDetails });
    } catch (err) {
      return res.status(500).json({ status: "error", error: err.message });
    }
  }
}
