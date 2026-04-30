import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { v4 as uuid } from "uuid";

const Form = forwardRef(function Form({addTask}, ref){

    let [taskName, setTaskName] = useState('');
    let [desc, setDesc] = useState('');

    const getName = (e) => {
        setTaskName(e)
    }

    const getDesc = (e) => {
        setDesc(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask({
          task : taskName,
          description : desc,
        });
    }

    useImperativeHandle(ref, () => ({
        clearForm() {
            setTaskName('');
            setDesc('');
        }
    }));



  return (
    <>
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Task</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Task Name"
                    onChange={(e)=>{
                        getName(e.target.value);
                    }}
                    value={taskName}
                  />
                  <label htmlFor="floatingInput">Task Name</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a description here"
                    id="floatingTextarea2"
                    onChange={(e)=>{
                        getDesc(e.target.value);
                    }}
                    value={desc}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Form;
