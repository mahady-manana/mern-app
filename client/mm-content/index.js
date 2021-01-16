import React, {useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import Homepage from './homepage';

const PrincipalMenu = () => {

return (
<div className="wrapper-content">
    <div className="principal-menu">
        <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login/">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup/">sign up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/">Admin only</Link>
                </li>
            </ul>
        </nav>
    </div>
    <div className="content">
    <Route exact path="/" component={Homepage}/>
    </div>
</div>
)
}
export default PrincipalMenu;