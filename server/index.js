import fs from "fs";
import express from "express";
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import Config from './config/config';
// Webpack development
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../webpack.client.js";
// End module for dev only 
/*
* Express router
*/
import UsersRouter from "./routers/user.router";
import AuthRouter from "./routers/auth.router";
// templates 
import Templates from "../templates";
/*
*  SSR Server Side Rendering
*/
import React from "react";
import {renderToString} from 'react-dom/server';
import Application from '../client/router';
import { StaticRouter } from "react-router-dom";
const app = express()
const CWD = process.cwd();

/*
*  If process.env.NODE_ENV === "development"
*/
if (process.env.NODE_ENV === "development") {
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
    publicPath : config.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler);
app.use(middleware)
app.use(hotMiddleware)
}
/*
* Webpack config for development End
* END
*/
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())
app.use(express.static(path.join(CWD, "/build/")));
app.use("/build", express.static(path.join(CWD, "/build/")));
/*
*
*  Router express
*
*/
app.use('/', UsersRouter);
app.use('/', AuthRouter)
/***********
*  Route to render React Component
*  SSR Route.
************/

app.get("*", (req, res) => {
    const context = {}
    const Markup = renderToString(
        <StaticRouter location = {req.url} context={context}>
            <Application/>
        </StaticRouter>
    )
    if (context.url) {
        return res.redirect(303, context.url)
    }
    const style1 = fs.readFileSync(path.join(CWD, "/client/style.css"));
    const style2 = fs.readFileSync(path.join(CWD, "/client/stylesheets/main.css"));
    const bootstrap = fs.readFileSync(path.join(CWD, "/node_modules/bootstrap/dist/css/bootstrap.min.css"));
    const mergeCss = (...file) => {
        const files = [...file];
        return files.join(" ")
    }
    res.status(200).send(Templates({
        markup : Markup,
        css : mergeCss(style1, style2),
        topCss : mergeCss(bootstrap)
    }))
})
/************
* SSR React Component
* End of SSR
*************/

mongoose.connect(Config.mongouri ,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
}, error => {
    if (error) {
        console.log(error)
    }
    console.log("Connection to mongoDB : Successfully.")
})

app.listen(Config.port,
    () => {
        console.log(`Server running at ${Config.port} :\nVisit at : http://localhost:${Config.port}`)
    }
)