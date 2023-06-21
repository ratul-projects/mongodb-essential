import BaseModel from "./base.model.js";
export default class PostsModel extends BaseModel {
  constructor() {
    super();
    this._collectionName = "posts";
  }
  async getPostDetailsById(postId) {
    const postDetails = await global.connection.collection("posts").aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "postId",
          as: "reviews",
        },
      },
    ]);
    return postDetails;
  }
}
