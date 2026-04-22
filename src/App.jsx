import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { tasks } from "./data";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import UpdateForm from "./components/UpdateForm";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [updateTaskObject, setUpdateTaskObject] = useState({});
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

  const updateTask = (id) =>{
    let task = allTasks.find((task) => task.id == id);
    setUpdateTaskObject(task);
    setShow(true);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    setAllTasks(tasks)
  },[])

  return (
    <>
      <div className="container">
        <Navbar />
        <Form addTask={addTask} />
        <Tasks allTask ={allTasks} deleteTask={deleteTask} updateTask={updateTask}/>
        <UpdateForm show={show} handleClose={handleClose} updateTaskObject={updateTaskObject}/>
      </div>
    </>
  );
}

export default App;
