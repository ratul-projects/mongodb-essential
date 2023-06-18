import BaseModel from "./base.model";
export default class PostsModel extends BaseModel {
    constructor() {
        this._tableName = 'posts';
    }

}