import React, {useEffect} from 'react';
import {hydrate} from 'react-dom';
import {ThemeProvider} from "@material-ui/core/styles";
import App from "./App.js";
import "./bootstrap.min.css";
import "./stylesheets/main.css";
import "./style.css";
import theme from "./theme"; 
const Main = () => {

useEffect(() => {
    
    const jsStyles = document.querySelector("#jsserver-css");
    if (jsStyles) {
        jsStyles.parentElement.removeChild(jsStyles);
      }
    return () => {
       <ThemeProvider theme={theme}>
           <App/>
       </ThemeProvider>
    }
}, [])
}
hydrate(
    <App/>, document.getElementById("entryContent")
)
if (process.env.NODE_ENV === "development") {
    if (module) {
        module.hot.accept()
    }
}