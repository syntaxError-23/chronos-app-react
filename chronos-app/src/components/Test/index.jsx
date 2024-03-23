import React from "react";
import './test.css'

function Test(){
    
    let hourArray = []
    for(let i=0; i<24; i++){

        i<10 ? hourArray.push(`0${i}:00`) : hourArray.push(`${i}:00`)
        
    }
    
    console.log(hourArray);
    
    return(
        <>
        <h1 className="text-center mb-5" style={{fontWeight: "800", fontSize: "3em"}}>TEST</h1>

        <div className="grid-parent">
            {hourArray.map((hour, index) => {
                <div className="time-square" id={index}>{hour}</div>
            })}
        </div>
        </>
    )
}

export default Test;