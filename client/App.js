import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme"; 
// Components
import Router from './router'
const App = () => {
    useEffect(() => {
    
        const jsStyles = document.querySelector("#jsserver-css");
        if (jsStyles) {
            jsStyles.parentElement.removeChild(jsStyles);
          }
    }, [])
    
return (
<BrowserRouter>
    <ThemeProvider theme={theme}>
        <Router/>
    </ThemeProvider>
 </BrowserRouter>
)
}
export default App;