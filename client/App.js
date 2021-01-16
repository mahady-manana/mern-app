import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

// Components
import Router from './router'
const App = () => {

return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
)
}
export default App;