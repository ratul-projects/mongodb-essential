export default class BaseModel {
  _collectionName;

  async create(requestData = {}) {
    return await global.connection
      .collection(this._collectionName)
      .insertOne(requestData);
  }
}
