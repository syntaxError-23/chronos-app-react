import { useEffect, useState } from "react";
import './schedule.css';


    /* *************** Create Task Class  *************** */ 

    class Task {
        constructor(desc, start, end, colour){
            this.desc = desc;
            this.start = start;
            this.end = end;
            this.colour = colour;
        }

        setProperties(){
            this.startHour = this.start.slice(0,2);
            this.startMin = this.start.slice(3);
            this.endHour = this.end.slice(0,2);
            this.endMin = this.end.slice(3);
        }

        calcTimeDiff() {
            let hourDiff = parseInt(this.endHour) - parseInt(this.startHour);
            console.log(`${hourDiff} hours`);
            let minDiff = parseInt(this.endMin) - parseInt(this.startMin);
            console.log(`${minDiff} mins`);
        }
    }


function Schedule() {
    const [inputValue, setInputValue] = useState('');
    const [selectStartValue, setSelectStartValue] = useState('');
    const [selectEndValue, setSelectEndValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [previousTasks, setPreviousTasks] = useState([]);

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
        const currentTask = new Task(inputValue, selectStartValue, selectEndValue, 'red');
        currentTask.setProperties();
    
        setTasks(prevTasks => [...prevTasks, currentTask]);
        setPreviousTasks(tasks);

        // Clear input values
        setInputValue('');
        setSelectEndValue('');
        setSelectStartValue('');

        console.log(`currentTask ${currentTask}`);
        console.log(tasks);

    };

    /* *************** JS imported from test *************** */ 
        
    let hourArray = [];

    for(let i=0; i<24; i++){

        i<10 ? hourArray.push(`0${i}:00`) : hourArray.push(`${i}:00`);
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

                <div className="grid-parent">
            
                    {hourArray.map((hour, index) => (
                        <div className="time-square"  key={index} id={`time-${index}`} style={{ gridColumn: 1 }}>{hour}</div>
                    ))}

                    {/* {hourArray.map((content, index) => (

                            <div className="task-square" key={index} id={`task-${index}`} 
                            style={{ gridColumn: 2, gridRow: index + 1 }}></div>

                    ))} */}

                    {tasks.map((task, index) => {

                        let taskRowSpan = 0; //Variable to determine grid row span
                        let totalMins = 0; //Variable that stores total minutes for each task
                        let taskCol = 2;


                        // tasks.forEach(previousTask => {
                        //     if(parseInt(previousTask.start.split(':')[0]) === taskStartHour &&  parseInt(previousTask.end.split(':'))[0] === taskEndHour && taskEndHour ==! 0 && parseInt(previousTask.end.split(':'))[0] ==! 0 ) {
                        //         taskCol++;
                        //     }
                        // })

                        console.log(tasks);

                        //calculates differences in start and end hours/mins
                        const taskHourDiff = task.endHour - task.startHour;
                        const taskMinDiff = task.endMin - task.startMin;

                        //calculates total minutes 
                        totalMins = (taskHourDiff * 60) + taskMinDiff;
                        console.log(`TOTAL MINS: ${totalMins}`);

                        taskRowSpan = taskHourDiff;

                        if((taskHourDiff === 1 && (totalMins + taskStartMin > 60)) || (taskHourDiff < 1 && taskEndMin > taskStartMin)){
                            taskRowSpan++;
                        }

                        // Calculate the duration of the task in minutes
                        const taskDuration = (taskEndHour * 60 + taskEndMin) - (taskStartHour * 60 + taskStartMin);

                        // Calculate the start and end columns for the task
                        const startCol = taskStartHour * 2 + (taskStartMin >= 30 ? 1 : 0) + 1;
                        const endCol = startCol + Math.ceil(taskDuration / 30);

                        //if a new task occupies the same column as another task add a new col



                        return (
                            <div className="task" key={index} 
                            style={{gridColumn: taskCol, 
                            gridRow: `${taskStartHour + 1}/span ${taskRowSpan}`,
                            zIndex: 2}}> 
                                <p className="task-desc">{task.desc}</p> 
                                <p className="task-time">{task.start} - {task.end}</p>
                            </div>
                        )
                        
                            
                    })}

                </div>
            </div>
            
        </>
    )
}

export default Schedule;