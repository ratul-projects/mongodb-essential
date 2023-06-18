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

      return res.json({ status: "success", createdUser: createdUser });
    } catch (err) {
        return res.status(400).json({status: "error",error: err.message});

    }
  }

  async getUserDetails(req, res, next) {
    const userid = req.params.id;
    const userDetails = await this._userModel.getUserById(userid);
    return res.json({status: "success", data: userDetails});

  }
  async updateUser(req, res) {
    const {id} = req.params;
    const {firstName,lastName} = req.body;
    const updateduserDetails = await this._userModel.updateUser(id,{firstName,lastName});
    return res.json({status: "success", data: updateduserDetails});

  }

  async deleteUser(req,res,next) {
    const {id} = req.params;
    const deltedUser = await this._userModel.deleteUser(id);
    return res.json({status: "success", data: deltedUser});
  }


}

export default UsersController;
