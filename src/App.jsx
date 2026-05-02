import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { tasks } from "./data";
import Tasks from "./components/Tasks";
import { useEffect, useRef, useState } from "react";
import UpdateForm from "./components/UpdateForm";
import api from "./api/axios";
import { handleError, handleSuccess } from "./api/handler";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);


  const formRef = useRef(null);

  const [updateTaskObject, setUpdateTaskObject] = useState({});
  
  const addTask = (task) =>{
    storeTask(task);
  }

  const deleteTask = async (id) =>{
    try {
      let response = await api.delete(`/task/delete?task_id=${id}`);
      handleSuccess(response,true);
      fetchTask();
    } catch (error) {
      handleError(error,true);
    }
  }

  const editTask = (id) =>{
    let task = allTasks.find((task) => task.id == id);
    setUpdateTaskObject(task);
    setShow(true);
  }

  const updateTask = async (updatedTask) =>{
    console.log(updatedTask);
    try {
      let response = await api.put(`/task/update?task_id=${updatedTask.id}`,
        {
          title:updatedTask.task,
          description:updatedTask.description,
        }
      );
      handleSuccess(response,true);
      fetchTask();
      handleClose();
    } catch (error) {
      handleError(error,false);
    }
  }


  const fetchTask = async () => {
    try {
      let response = await api.get('/task/index');
      let tasks = handleSuccess(response,false);
      setAllTasks(tasks);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      handleError(error,true);
    }
  }

  const storeTask = async (task) => {
    try {
      let response = await api.post('/task/store',{
        title: task.task,
        description: task.description,
      });
      handleSuccess(response,true);
      formRef.current.clearForm();
      fetchTask();
    } catch (error) {
      handleError(error,true);
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
        <Form addTask={addTask} ref={formRef}/>
        <Tasks allTask ={allTasks} loading={loading} deleteTask={deleteTask} editTask={editTask}/>
        <UpdateForm show={show} handleClose={handleClose} updateTaskObject={updateTaskObject} updateTask={updateTask}/>
      </div>
    </>
  );
}

export default App;
