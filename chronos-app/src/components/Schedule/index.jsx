import { useEffect, useState } from "react";
import './schedule.css';

function Schedule() {
    const [inputValue, setInputValue] = useState('');
    const [selectStartValue, setSelectStartValue] = useState('');
    const [selectEndValue, setSelectEndValue] = useState('');
    const [tasks, setTasks] = useState([]);

    /* *************** Creates arrays of units of time to be used as time slots *************** */ 

    // Variable declarations
    const hoursArr = [];
    const timeSlotsArr =[];
    const combinedSlotsArr = [];
    let tenMinSlots = 0;

    //Create array of hours
    for(let i=0; i<24; i++){
        hoursArr.push(i)
    }

    //Create array of 10 minute slots
    for(let j=0; j<6; j++){
        timeSlotsArr.push(tenMinSlots.toFixed(2));
        tenMinSlots+=0.1;
    }
    
    //Create array of hours going up in 10 min increments
    hoursArr.forEach((hour) => {
        let prefix = '0';

        if(hour > 9){
            prefix = '';
        }
        timeSlotsArr.forEach((slot) => {

          let currentSlot = `${prefix}${hour}:${slot.slice(2)}`;
          combinedSlotsArr.push(currentSlot);
        });
      });

    /* *************** Create object on button press (add button in new task modal) *************** */ 
    
    class Task {
        constructor(desc, start, end, colour){
            this.desc = desc;
            this.start = start;
            this.end = end;
            this.colour = colour;
        }
    }

    Task.prototype.calcTimeDiff = function() {
        console.log('----------------------------');
            console.log('Time diff function');
            console.log('----------------------------');
            let startHour = this.start.slice(0,2);
            let startMin = this.start.slice(3);
            let endHour = this.end.slice(0,2);
            let endMin = this.end.slice(3);
    
            let hourDiff = parseInt(endHour) - parseInt(startHour);
            console.log(`${hourDiff} hours`);
            let minDiff = parseInt(endMin) - parseInt(startMin);
            console.log(`${minDiff} mins`);
    }

    const testTask = new Task('A thing to be done', '00:00', '01:00', 'red')



    let tasksArr = [testTask];
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        };
    
    const handleSelectStart = event => {
        setSelectStartValue(event.target.value);
    }

    const handleSelectEnd = event => {
        setSelectEndValue(event.target.value);
    }
    
    const handleClick = () => {
        let currentTask = new Task(inputValue, selectStartValue, selectEndValue, 'red');
        tasksArr.push(currentTask);
        setTasks(tasksArr)
        setInputValue('');
        setSelectEndValue('');
        setSelectStartValue('');
        console.log(currentTask);
        console.log(tasksArr)
        currentTask.calcTimeDiff();
    }


    /* *************** Returned JSX *************** */ 
    return(
        <>

        {/* *************** New task modal container *************** */}

            <div id="schedule-content">
                
                
                <div id="new-task-container" className="py-1 px-3">
                    
                    <div className="new-task-div mt-3 mb-2" id="new-task-form">
                        <label htmlFor="new-task" className="schedule-input-label form-label">Task:</label>
                        <input onChange={handleInputChange} value={inputValue} type="text" id="new-task-input" name="new-task" className="form-control" placeholder="Enter a task here"/>
                    </div>
                    
                    <div className="new-task-div" id="schedule-dropdowns">
                        
                        <div id="dropdown-1" className="dropdown-container mb-2">
                            <label htmlFor="duration" className="schedule-input-label form-label" >Start:</label>
                            <select onChange={handleSelectStart} value={selectStartValue} name="duration" id="new-task-duration" className="form-select">
                                <option value="prompt">Please select a time</option>  {/**/}
                                {combinedSlotsArr.map((slot, index) => (
                                    <option key={index} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div id="dropdown-2" className="dropdown-container">
                            <label htmlFor="duration" className="schedule-input-label form-label" >End:</label>
                            <select onChange={handleSelectEnd} value={selectEndValue}name="duration" id="new-task-duration" className="form-select">
                                <option value="prompt">Please select a time</option>
                                {combinedSlotsArr.map((slot, index) => (
                                    <option key={index} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div id="colour-picker-container" className="my-4">
                        
                        <p className="text-center" id="colour-picker-title">Block Colour</p>
                        
                        <div id="colour-picker" className="">
                            <div className="cp-row">
                               <div className="colour-container"></div>
                               <div className="colour-container"></div>
                               <div className="colour-container"></div>
                               <div className="colour-container"></div>
                            </div>

                            <div className="cp-row">
                               <div className="colour-container"></div>
                               <div className="colour-container"></div>
                               <div className="colour-container"></div>
                               <div className="colour-container"></div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="btn-wrapper py-3" id="new-task-btn-wrapper">
                        <button onClick={handleClick} id="new-task-btn" >Add</button>
                    </div>
                    
                </div>
                
                {/* *************** Schedule section *************** */}

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
                                    <td className="task-block text-center">
                                                        {/* Render tasks for this hour */}
                                        {tasks.map((task, index) => {
                                            const taskStartHour = parseInt(task.start.split(':')[0]);
                                            const taskEndMin = parseInt(task.end.split(':')[1])
                                            const taskEndHour = parseInt(task.end.split(':')[0]);
                                            if (taskStartHour <= hour && taskEndHour >= hour) {
                                                if (taskEndHour === hour && taskEndMin === 0){
                                                    return null
                                                }

                                                return (
                                                    <div key={index} className="task-item">
                                                        <p>{task.desc} ({task.start} - {task.end})</p> 
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}

                                    
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            
        </>
    )
}

export default Schedule;