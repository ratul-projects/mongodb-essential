import BaseModel from "./base.model.js";
export default class PostsModel extends BaseModel {
  constructor() {
    super();
    this._collectionName = "posts";
  }
}
