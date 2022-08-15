import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Walk Dog", priority: "high"}, 
    {name: "Water Plant", priority:"low"},
    {name: "Phone Dentist", priority: "high"}
  ])

  const [newTask, setNewTask] = useState("");   //making new state so can have a new task/priority, then gives a new function. Can use that function to update empty state with whatever value we give it. Then later can push that value into original array by using function given with original state.
  const [newPriority, setNewPriority] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return <li key={index}>
      <span>{task.name} <span>{task.priority}</span></span>
      {/* {task.priority ? <button className="high">High!</button>: <button className="" onClick={() => {taskPriority(index)}} >Low</button>} */}
      {/* {task.priority ? <div className="high">High</div> : <div className="low">Low</div>} */}
      
      </li>
  })

  const handleTaskInput = (event) => {   //anonymous function so only renders during callback when submitting form?
    setNewTask(event.target.value);
  }

  const handleTaskPriority = (event) => {   //setNewPriority is function, taking th value of what is being passed in the form(in this case for priority radio buttons). Function used to update value of newPriority.
    setNewPriority(event.target.value);    //when calling the function, with new value, it will update the state
  }


  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, priority: newPriority})
    setTasks(copyTasks);
    setNewTask("");
  }

  // const taskPriority = (index) => {
  //   const copyTasks = [...tasks];
  //   copyTasks[index].priority = true;
  //   setNewPriority(copyTasks)
  // }


  return (
    <div className="App">
      <h1>Task List</h1>
      <hr></hr>


      {/* not sure why label has htmlFor, took it out and seems to make no */}

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add Task:</label>  
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} ></input>
        <input type="submit" value="Save New task" ></input>
        <input type="radio" value="High" name="priority"  onChange={handleTaskPriority}></input>High
        <input type="radio" value="Low" name="priority" onChange={handleTaskPriority}></input>Low
      </form>

      <ul>
        {taskNodes}
      </ul>


     
    </div>
  );
}

export default App;
