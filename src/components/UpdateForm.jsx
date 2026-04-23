import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const UpdateForm = ({ show, handleClose, updateTaskObject, updateTask }) => {
  let [taskName, setTaskName] = useState("");
  let [desc, setDesc] = useState("");

  const getName = (e) => {
    setTaskName(e);
  };

  const getDesc = (e) => {
    setDesc(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTask({
      id: updateTaskObject.id,
      task: taskName,
      description: desc,
    });

    setTaskName("");
    setDesc("");
  };

  useEffect(() => {
    if (updateTaskObject) {
      setTaskName(updateTaskObject.task || "");
      setDesc(updateTaskObject.description || "");
    }
  }, [updateTaskObject]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Update Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Task Name"
                onChange={(e) => {
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
                onChange={(e) => {
                  getDesc(e.target.value);
                }}
                value={desc}
              ></textarea>
              <label htmlFor="floatingTextarea2">Description</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default UpdateForm;
