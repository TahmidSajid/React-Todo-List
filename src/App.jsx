import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { tasks } from "./data";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import UpdateForm from "./components/UpdateForm";
import api from "./api/axios";
import { handleSuccess } from "./api/handler";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);


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

  const editTask = (id) =>{
    let task = allTasks.find((task) => task.id == id);
    setUpdateTaskObject(task);
    setShow(true);
  }

  const updateTask = (updatedTask) =>{
    let updatedTasks = allTasks.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    })

    setAllTasks(updatedTasks);
    handleClose();

  }


  const fetchTask = async () => {
    try {
      let response = await api.get('/task/index');
      let tasks = handleSuccess(response,true);
      setAllTasks(tasks);
      setLoading(false);
    } catch (error) {
      console.log('Task Failed Successfully');
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    fetchTask();
    setAllTasks(tasks)
  },[])

  return (
    <>
      <div className="container">
        <Navbar />
        <Form addTask={addTask} />
        <Tasks allTask ={allTasks} loading={loading} deleteTask={deleteTask} editTask={editTask}/>
        <UpdateForm show={show} handleClose={handleClose} updateTaskObject={updateTaskObject} updateTask={updateTask}/>
      </div>
    </>
  );
}

export default App;
