import React from "react"
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import chronosLogo from '../../assets/CHRONOS-logo-300dpi.svg';
import './landing.css'
import dayjs from 'dayjs'

function Landing({children}){

    let suffix = '';

    const dateToday1 = dayjs().format('dddd D');
    const dateToday2 = dayjs().format('MMMM YYYY');

    switch(parseInt(dayjs().format('D'))) {
        case 1:
        case 31:
            suffix = 'st'
            break;
        case 2: 
            suffix = 'nd'
            break;
        case 3: 
            suffix = 'rd'
            break;
        default: 
            suffix = 'th'
    }
    
    let completeDate = `${dateToday1}${suffix} ${dateToday2}`;
    console.log(completeDate);
    
    let timeRightNow = dayjs().format('H:mm');



    return (
    <>
        <div id='landing-container'>
            
            <div id="colour-filter" className="p-1">
                
                <div className="container-fluid py-1" id="content">
                    
                    <div id="landing-banner" className="mb-3"> 
                        <div className="banner-side-item">
                            <p className="banner-text text-center"><a id='time-right-now' target="blank" href="https://www.whattimeisitrightnow.com/">{timeRightNow}</a></p>
                        </div>
                        
                        <Link to='/'><div id="logo-wrapper" className="banner-item d-flex justify-content-center">
                            <img src={chronosLogo} id='chronos-logo' alt="Chronos logo" />
                        </div></Link>
                        
                        <div className="banner-side-item">
                            <p className="banner-text text-center">{completeDate}</p>
                        </div>
                    </div>
                </div>

                {children}
            </div>
        </div>
    </>
    )
}

export default Landing;
