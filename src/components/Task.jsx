import React from "react";

const Task = ({ id, taskName, desc }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{taskName}</h5>
            <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Task;
