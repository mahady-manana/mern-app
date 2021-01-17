import React, {useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import Homepage from './homepage';
import  UserDashbord from "../mm-admin/user.dashbord";
import Validator from "../mm-admin/auth/auth.validator";
import Signup from '../mm-admin/auth/signup';

const PrincipalMenu = () => {
const renderProperStatus = () => {
    if (Validator.isAuthenticated()) {
        return (<UserDashbord/>)
    } else {
    return (
        <div className="loginoraccount">
            <div className="login">
                <Link className="nav-link" to="/login/">Login</Link>
            </div>
            <div className="signup">
                <Link className="nav-link" to="/signup/">Create account</Link>
            </div>
        </div>
    )}
}
return (
<div className="wrapper-content">
    <div className="principal-menu">
        <nav className="navbar navbar-expand-sm bg-light">
            <Link className="navbar-brand" to="/">LOGO</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                
            </ul>
        </nav>
    </div>
    <div className="sidebar-dashbord">
        {renderProperStatus()}
    </div>
    <div className="content">
    <Route exact path="/" component={Homepage}/>
    <Route path="/signup/" component={Signup}/>
    </div>
</div>
)
}
export default PrincipalMenu;