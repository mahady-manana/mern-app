import express from "express";
import userContrl from "../controllers/user.controller";
import Auth from "../controllers/auth";

const Router = express.Router();

Router.post("/user/action/add-user/", userContrl.create);
Router.get("/user/action/users/", userContrl.list);
Router.put("/user/action/:id" , userContrl.addFavorite)
Router.get("/user/action/:id" , userContrl.oneUser)
Router.put("/user/action/update/:id" , userContrl.removeInFavorite)

export default Router;
