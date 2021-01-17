import React, {useState} from 'react';
import {Redirect, Link} from "react-router-dom";
import {signin} from './api'
import auth from './auth.validator';
const Signin = props => {
const [values, makeValues] = useState({
    email : "",
    hashed_password : "",
    redirectTo : false
})
const handleChange = event => {
    const name = event.target.name;
    makeValues({...values, [name] : event.target.value})
}
const handleSubmit = event => {
    event.preventDefault()
const user = {
    email: values.email || undefined,
    hashed_password: values.hashed_password || undefined
}

signin(user).then((data) => {
    if (data.error) {
    makeValues({ ...values, error: data.error})
    } else {
    auth.authenticate(data, () => {
        makeValues({ ...values, error: '',redirectTo : true})
    })
    }
})
}
 const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
}
const {redirectTo} = values
  if (redirectTo) {
    return (<Redirect to={from}/>)
}
return (
<div id="signin" className="wrapper-content">
    <div className="sign-entry container">
        <h1>Sign in</h1>
        <p>Enter your email and password</p>
        <div className="signin-entry">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" >Email :</label>
                    <input type="email" className="form-control" name="email" value={values.email} onChange={handleChange}/>
                    </div>
                <div className="form-group">
                    <label htmlFor="hashed_password" >Password :</label>
                    <input type="password" className="form-control" name="hashed_password" value={values.hashed_password} onChange={handleChange}/>
                    </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                <div className="asking_user">Don't have an account <Link to="/signup/">sign up here</Link></div>
            </form>
        </div>
    </div>
</div>
)
}
export default Signin;