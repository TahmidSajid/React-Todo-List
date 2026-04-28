import React from "react";
import Task from "./Task";

const Tasks = ({ allTask, loading, deleteTask, editTask }) => {
  return (
    <>
      <div className="row mt-4">
        {loading ? <h4 className="text-center">Task is loading</h4> : ''}
        {!loading && allTask.map((task,index) => {
          return (
          <div className="col-lg-4" key={index}>
            <Task id={task.id} taskName={task.title} desc={task.description} deleteTask={deleteTask} editTask={editTask}/>
          </div>
          )
        })}
      </div>
    </>
  );
};

export default Tasks;
