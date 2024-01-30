import React from "react";
import {Link} from 'react-router-dom'
import Landing from '../components/Landing'


function LandingPage() {
    return(
        <>
            <Landing>
            
                <div id="tagline-wrapper">
                        <h1 id="tagline" className="text-center my-5">FULL CONTROL AROUND THE CLOCK</h1>
                </div>
            
                <div className="link-btn-wrapper mb-5">
                    <Link to='login'><button className="link-btn btn btn-primary mx-1">Login</button></Link>
                    <Link to='/signup'><button className="link-btn btn btn-primary mx-1">Sign Up</button></Link>
                    <Link to='/schedule'><button className="link-btn btn btn-primary mx-1">Schedule</button></Link>
                </div>
            </Landing>
        </>
    )
}

export default LandingPage;