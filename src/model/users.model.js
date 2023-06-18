import BaseModel from "./base.model.js";
import {ObjectId} from "mongodb";
class UsersModel extends BaseModel{

    async createUser(users = {}) {
        const createdUser = await global.connection.collection('user').insertOne(users);
        return createdUser;
    }

    async getUserByEmail(email) {
        const userDetails = await global.connection.collection('user').findOne({ email });
        return userDetails;
    }

    async getUserById(userId) {
        const userDetails = await global.connection.collection('user').findOne({_id: new ObjectId(userId) })
        return userDetails;
    }

    async updateUser(userId,userDetails = {}) {
        const updatedUser = await global.connection.collection('user').updateOne({_id: new ObjectId(userId)},{$set: userDetails});
        return updatedUser;
    }

    async deleteUser(userId) {
        const deletedUser = await global.connection.collection('user').deleteOne({_id: new ObjectId(userId)});
        return deletedUser;
    }




}
export default UsersModel;