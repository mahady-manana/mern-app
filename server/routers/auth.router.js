import express from 'express'
import Auth from '../controllers/auth'
import userController from '../controllers/user.controller';

const Router = express.Router()

Router.post('/user/auth/signin', Auth.signin);
Router.get("/user/auth/signout", Auth.signout);
Router.get("/user/auth/:id", Auth.requireSignin, userController.read);
export default Router;
