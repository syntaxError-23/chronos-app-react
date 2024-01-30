import React from "react"
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import chronosLogo from '../../assets/CHRONOS-logo-300dpi.svg';
import './landing.css'

function Landing({children}){
    return (
    <>
        <div id='landing-container'>
            
            <div id="colour-filter" className="p-1">
                
                <div className="container-fluid py-1" id="content">
                    
                    <div id="logo-wrapper" className="d-flex justify-content-center mt-2">
                        <img src={chronosLogo} alt="Chronos logo" />
                    </div>
                </div>

                {children}
            </div>
        </div>
    </>
    )
}

export default Landing;
