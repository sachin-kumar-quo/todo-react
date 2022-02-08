import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../utils/ApiFunctions";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleOnSubmit = async () => {
    const todo = { title, date: new Date(date).getTime() };
    await createTodo(todo);
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h4>Create Todo</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Todo Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={handleChangeTitle}
                />
              </div>
              <div className="form-group">
                <label>Date / Time</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  value={date}
                  onChange={handleChangeDate}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3 px-5"
                  onClick={handleOnSubmit}
                >
                  Add Todo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
