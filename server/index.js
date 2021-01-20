import fs from "fs";
import http from "http";
import express from "express";
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import Config from './config/config';
import devBundle from "./devbundle";
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
import ReactDOMServer from 'react-dom/server';
import Application from '../client/router';
import { StaticRouter } from "react-router-dom";
import {ServerStyleSheets, ThemeProvider} from "@material-ui/core/styles";
import theme from '../client/theme';

const app = express()
const CWD = process.cwd();
devBundle.Bundler(app)
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
    const sheets = new ServerStyleSheets()
    const context = {}
    const Markup = ReactDOMServer.renderToString(
        sheets.collect(
            <StaticRouter location = {req.url} context={context}>
                <ThemeProvider theme={theme}>
                    <Application/>
                </ThemeProvider>
            </StaticRouter>
        )
    )
    if (context.url) {
        return res.redirect(303, context.url)
    }
    const style1 = fs.readFileSync(path.join(CWD, "/client/style.css"));
    const style2 = fs.readFileSync(path.join(CWD, "/client/stylesheets/main.css"));
    const bootstrap = fs.readFileSync(path.join(CWD, "client/bootstrap.min.css"));
    const mergeCss = (...file) => {
        const files = [...file];
        return files.join(" ")
    }
    const materialUICss = sheets.toString();
    res.status(200).send(Templates({
        markup : Markup,
        css : mergeCss(style1, style2),
        topCss : mergeCss(bootstrap),
        muicss : materialUICss
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
// for Glitch Only
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);