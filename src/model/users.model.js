import BaseModel from "./base.model.js";
class UsersModel extends BaseModel{

    async createUser(users = {}) {
        const createdUser = await global.connection.collection('user').insertOne(users);
        return createdUser;
    }

    async getUserByEmail(email) {
        const userDetails = await global.connection.collection('user').findOne({ email });
        return userDetails;
    }


}
export default UsersModel;