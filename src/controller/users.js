import UsersModel from "../model/users.model.js";
class UsersController {
  _userModel;
  constructor() {
    this._userModel = new UsersModel();
  }

  async createUser(req, res, next) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const checkIfUserExist = await this._userModel.getUserByEmail(email);
      if(checkIfUserExist) {
        throw new Error(`user with email ${email} already exists`);
      }
      const createdUser = await this._userModel.createUser({
        firstName,
        lastName,
        email,
        password,
      });

      return res.json({ status: "success", createdUser: checkIfUserExist });
    } catch (err) {
        res.status(400);
        return res.json({status: "error",error: err.message});

    }
  }
}

export default UsersController;
