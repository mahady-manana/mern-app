import React from 'react';
import {hydrate, render} from 'react-dom';
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css"
import "./stylesheets/main.css"

const renderMethod = module.hot ? render : hydrate; 
renderMethod(
    <App/>, document.getElementById("entryContent")
)
if (process.env.NODE_ENV === "development") {
    if (module) {
        module.hot.accept()
    }
}