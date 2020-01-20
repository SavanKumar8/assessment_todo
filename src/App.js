import React, { useState } from 'react';
import './App.css';

const Todo =()=>{
  const [state, setstate] = useState({toDoList: [
  {taskName:'Washing', completed:false},
  {taskName:'Cooking', completed:false}
],
errorMessage: ''});


// const inputRef = React.createRef();// to clear input field 

const addTaskListener =(task) =>{
  if(task){
    setstate(prevstate=>{
      const data = [...prevstate.toDoList] //spread the toDoList array from state object.
      data.push({taskName:`${task}`,completed:false})
      // inputRef.value=''
      document.getElementById('task').value = ''
      return {...prevstate,toDoList:data, errorMessage: ''} //updating the toDoList with data array
    })
  }else{
    setstate(prevstate=>{
      return {...prevstate, errorMessage:'Please enter a task'} //updating the toDoList with data array
    })
  } 
}

const taksListListener = (index) =>{ 
  setstate(prevstate =>{
  const data = [...prevstate.toDoList]
  data[index].completed = !data[index].completed;
return{...prevstate, toDoList:data}
})
}

const remainingTasks = () =>{
 return  state.toDoList.filter(listItem =>!listItem.completed).length;     
 }

  return(
          <div>
            <h1>To-Do List</h1>
            <div>
              <input type="text" id="task" name="task" placeholder="Enter a task" onKeyDown={(event) => {if(event.keyCode === 13)
                        document.getElementById('btnAdd').click()}}></input>
              <button id="btnAdd" onClick={() => addTaskListener(document.getElementById('task').value)}>Click Me</button>
              <p style={{color:"red"}}>{state.errorMessage}</p>
            </div>
            <div>
              <ul>
                {state.toDoList.map((taskItem,index)=>
                  <li key={index} title ="Click item to mark completed" onClick = {()=>taksListListener(index)} className={taskItem.completed ? "list-item-completed":''}>{taskItem.taskName}</li>)}
              </ul>
                <p className="remaining-items">To-Do's Pending: {remainingTasks()}</p>
            </div>
          </div>  
        )
}

export default Todo;
