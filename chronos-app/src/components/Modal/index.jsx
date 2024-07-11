import React from 'react'
import ReactDom from 'react-dom'

 function Modal() {
  
  return (
   <>
   <div id="error-wrapper" style={{ display: errDisplay }}>
        <div id="error-msg">
            <span id="error-close" onClick={() => setErrDisplay('none')}>X</span>
            <p id="error-text">This task clashes with a pre-existing task. Please choose a different time for your task</p>
        </div>
    </div>

   </>
  )
}
export default Modal
