import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import ContentEntry from './mm-content/index';
import UserDashbord from './mm-admin/user.dashbord';
import Signin from './mm-admin/auth/signin';
import PrivateRoute from "./mm-admin/auth/has.account"
const App = () => {

return (
    <div className="web-content">
    <Switch>
        <PrivateRoute path="/dashbord/" component={UserDashbord}/>
        <Route exact path="/login/" component={Signin}/>
        <Route  path="/*" component={ContentEntry}/>
    </Switch>
    </div>
)
}
export default App;