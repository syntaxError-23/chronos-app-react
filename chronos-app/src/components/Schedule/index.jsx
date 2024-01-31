import React from "react";
import './schedule.css';

function Schedule() {
    const hoursArr = [];

    for(let i=0; i<24; i++){
        hoursArr.push(i)
    }

    return(
        <>
            <div id="schedule-container">
                <table className="">
                    <thead>
                        <tr>
                            <th id="time" className="text-center">Time</th>
                            <th id='task' className="text-center">Task</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                        hoursArr.map((hour) => (
                            <tr key={hour} className="schedule-row">
                                <td className="time-block text-center">{hour}:00</td>
                                <td className="task-block text-center"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Schedule;