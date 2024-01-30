import React from "react";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup(){
    return(
        <>
        <div id="signup-area" className="p-4 mb-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="new-username" className="form-label border-color-success">Username</label>
                    <input type="text" className="form-control" id="new-username" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first-name" aria-describedby="fn-help" />
                    <div id="fn-help" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last-name" aria-describedby="ln-help" />
                    <div id="ln-help" className="form-text">This is confidential. Unless you can access local storage</div>
                </div>

                <div id="signup-button-wrapper" className="btn-wrapper">
                    <button type="submit" className="submit-btn" id="signup-submit-btn">Submit</button>
                </div>
            </form>
        </div>

        
        <div className="link-btn-wrapper mb-5">
            <Link to='/'><button className="link-btn btn btn-primary mx-1">Home</button></Link>
            <Link to='/login'><button className="link-btn btn btn-primary mx-1">Log in</button></Link>
        </div>
    
    </>
    )
}

export default Signup