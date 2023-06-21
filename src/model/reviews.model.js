import BaseModel from "./base.model.js";

export default class ReviewModel extends BaseModel {
  constructor() {
    super();
    this._collectionName = "review";
  }
}
