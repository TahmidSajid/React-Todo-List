import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { tasks } from "./data";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const addTask = (task) =>{
    setAllTasks([
      ...allTasks,
      task,
    ]);
  }

  const deleteTask = (id) =>{
    let tasks = allTasks.filter((task) => task.id != id);
    setAllTasks(tasks);
  }

  useEffect(()=>{
    setAllTasks(tasks)
  },[])

  return (
    <>
      <div className="container">
        <Navbar />
        <Form addTask={addTask} />
        <Tasks allTask ={allTasks} deleteTask={deleteTask}/>
      </div>
    </>
  );
}

export default App;
