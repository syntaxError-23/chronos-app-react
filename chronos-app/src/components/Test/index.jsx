import React from "react";
import './test.css'

function Test(){
    
    let hourArray = [];
    

    for(let i=0; i<24; i++){

        i<10 ? hourArray.push(`0${i}:00`) : hourArray.push(`${i}:00`);
    }


    return(
        <>

        <div className="grid-parent">
            
            {hourArray.map((hour, index) => (
                <div className="time-square"  key={index} id={`time-${index}`} style={{ gridColumn: 1 }}>{hour}</div>
            ))}

            {hourArray.map((content, index) => (

                    

                    <div className="task-square" key={index} id={`task-${index}`} 
                    style={{ gridColumn: 2, gridRow: index + 1 }}></div>

            ))}

        
        </div>
        </>
    )
}

export default Test;