import React from "react";
import Task from "./Task";

const Tasks = ({ allTask, deleteTask, updateTask }) => {
  return (
    <>
      <div className="row mt-4">
        {allTask.map((task,index) => {
          return (
          <div className="col-lg-4" key={index}>
            <Task id={task.id} taskName={task.task} desc={task.description} deleteTask={deleteTask} updateTask={updateTask}/>
          </div>
          )
        })}
      </div>
    </>
  );
};

export default Tasks;
