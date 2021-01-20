import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import ContentEntry from './mm-content/index';
import UserDashbord from './mm-admin/user.dashbord';
import SigninNew from './mm-admin/auth/signin';
import PrivateRoute from "./mm-admin/auth/has.account"
const App = () => {

return (
<Switch>
    <div className="web-content">
        <Route  path="/" component={ContentEntry}/>
        <PrivateRoute path="/dashbord/" component={UserDashbord}/>
        <Route path="/login/" component={SigninNew}/>
    </div>
</Switch>
)
}
export default App;