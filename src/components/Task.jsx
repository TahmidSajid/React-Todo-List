import React from "react";

const Task = ({ id, taskName, desc, deleteTask, editTask }) => {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{taskName}</h5>
            <p>{desc}</p>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-lg-3">
              <button type="button" className="btn btn-danger" onClick={()=>{deleteTask(id)}}>Delete</button>
            </div>
            <div className="col-lg-3">
              <button type="button" className="btn btn-warning" onClick={()=>{editTask(id)}}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
