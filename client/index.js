import React from 'react';
import {hydrate} from 'react-dom';
import App from "./App.js";
import "./bootstrap.min.css";
import "./stylesheets/main.css";
import "./style.css";


hydrate(
    <App/>, document.getElementById("entryContent")
)
if (process.env.NODE_ENV === "development") {
    if (module) {
        module.hot.accept()
    }
}