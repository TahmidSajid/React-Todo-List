import React from "react";
import Task from "./Task";

const Tasks = ({ allTask }) => {
  return (
    <>
      <div className="row mt-4">
        {allTask.map((task) => {
          return (
          <div className="col-lg-4">
            <Task id={task.id} taskName={task.task} desc={task.description}/>
          </div>
          )
        })}
      </div>
    </>
  );
};

export default Tasks;
