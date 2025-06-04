import React from 'react'
import { useState } from 'react'
import './MainT.css'
const MainT = () => {
    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    function handleinputChange(event) {
        setNewTask(event.target.value);
    }
    function handleAddTask() {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }
    function handleDeleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const newTasks = [...tasks];
            const temp = newTasks[index - 1];
            newTasks[index - 1] = newTasks[index];
            newTasks[index] = temp;
            setTasks(newTasks);
        }
    }
    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const newTasks = [...tasks];
            const temp = newTasks[index + 1];
            newTasks[index + 1] = newTasks[index];
            newTasks[index] = temp;
            setTasks(newTasks);
        }
    }
  return (
   <>
   <div className='to-do-con'>
     <h1>TODO LIST</h1>
     <input
  type="text"
  placeholder='Enter the Task'
  value={newTask}
  onChange={handleinputChange}
></input>
     <button onClick={handleAddTask} className='add-btn'>Add Task</button>
   </div>
   <ol>
  {tasks.map((task, index) => (
    <li key={index} className='task-item'>
      <input type="checkbox" className="task-checkbox" />
      <span>{task}</span>
      <button onClick={() => handleDeleteTask(index)} className='delete-btn'>Delete</button>
      <button onClick={() => moveTaskUp(index)} className='move-up-btn'>Move Up</button>
      <button onClick={() => moveTaskDown(index)} className='move-down-btn'>Move Down</button>
    </li>
  ))}
</ol>
   </>
  )
}

export default MainT