import { Router } from "express";
import UsersController from "../controller/users.js";
const router = Router()
export default (app) => {
    const userControllerInstance = new UsersController();

    app.use('/user',router);
    router.post('/',(req,res,next) => userControllerInstance.createUser(req,res,next));
    router.get('/:id',(req,res,next) => userControllerInstance.getUserDetails(req,res,next));
    router.put('/:id',(req,res,next) => userControllerInstance.updateUser(req,res));
    router.delete('/:id',(req,res,next) => userControllerInstance.deleteUser(req,res));
    return app;
}