import React from "react"
import {Link} from 'react-router-dom'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login(){
    
    console.log('Hello');
    
    
    return ( 
    <>
        <div id="login-area" className="p-4 mb-5">
            <form id="login-form">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Enter your username" />
                <div id="username-help" className="form-text">This is case sensitive</div>
            </div>

            <div id="login-button-wrapper" className="btn-wrapper">
                <button type="submit" className="submit-btn" id="login-submit-btn">Submit</button>
            </div>
            </form>
        </div>

        <div className="link-btn-wrapper mb-5">
            <Link to='/'><button className="link-btn btn btn-primary mx-1">Home</button></Link>
            <Link to='/signup'><button className="link-btn btn btn-primary mx-1">Sign Up</button></Link>
        </div>
    </>
    )
}


export default Login;