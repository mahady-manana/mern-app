import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
const Signup = () => {
const [values, makeValues] = useState({
    firstname : "",
    lastname : "",
    email : "",
    hashed_password : ""
})

const handleChange = event => {
    const name = event.target.name;
    makeValues({...values, [name] : event.target.value})
}
const handleSubmit = event => {
    event.preventDefault();
    const infos = {
        firstname : values.firstname,
        lastname : values.lastname,
        email : values.email,
        hashed_password : values.hashed_password
    }
    // console.log(infos)
    axios.post("/user/action/add-user/", infos)
        .then(response => {
            console.log("Signup successfully!")
        })
        .catch(error => console.log(error))
}
return (
<div id="signup" className="wrapper-content">
    <div className="signup-entry container">
        <h1>Sign up</h1>
        <p>Fill all fields to signup</p>
        <div className="entry">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="firstname" >First Name :</label>
                        <input type="text" className="form-control" name="firstname" value={values.firstname} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="lastname" >Last Name :</label>
                        <input type="name" className="form-control" name="lastname" value={values.lastname} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email :</label>
                    <input type="email" className="form-control" name="email" value={values.email} onChange={handleChange}/>
                    </div>
                <div className="form-group">
                    <label htmlFor="hashed_password" >Password :</label>
                    <input type="password" className="form-control" name="hashed_password" value={values.hashed_password} onChange={handleChange}/>
                    </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
                <div className="asking_user">Already have an account <Link to="/login/">Login here</Link></div>
            </form>
        </div>
    </div>
</div>
)
}
export default Signup;