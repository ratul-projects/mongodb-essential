import { Router } from "express";
import UsersController from "../controller/users.js";
const router = Router()
export default (app) => {
    const userControllerInstance = new UsersController();

    app.use('/user',router);
    router.post('/',(req,res,next) => userControllerInstance.createUser(req,res,next));
    return app;
}