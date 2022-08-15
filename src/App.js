import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Walk Dog", priority: "high"}, 
    {name: "Water Plant", priority:"low"},
    {name: "Phone Dentist", priority: "high"}
  ])

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return <li key={index}>
      <span>{task.name}</span>
      {/* {task.priority ? <button className="high">High!</button>: <button className="" onClick={() => {taskPriority(index)}} >Low</button>} */}
      {task.priority ? <div className="high">High</div> : <div className="low">Low</div>}
      
      </li>
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const handleTaskPriority = (event) => {
    setNewPriority(event.target.value);
  }


  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, priority: newPriority})
    setTasks(copyTasks);
    setNewTask("");
  }

  const taskPriority = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].priority = true;
    setNewPriority(copyTasks)
  }


  return (
    <div className="App">
      <h1>Task List</h1>
      <hr></hr>

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
