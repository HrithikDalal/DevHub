import React from '../../../node_modules/react';
import { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
// import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
       email: "",
       password: ""
    });

    const {email, password } = formData;

    function handleChange(event)
    {
        const {name, value} = event.target;
        setFormData(formData => {
            return{
                ...formData,
                [name]: value
            };
        });
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        console.log("Sucess");
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Account</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address"
             name="email" 
             value={email}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={handleChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
        </Fragment>
    )
}

export default Login;
