import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodo, updateTodo } from "../utils/ApiFunctions";

function EditTodo() {
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let data = await getTodo(id);
      console.log(data);
      setTodo({
        ...data,
        date: new Date(data.date).toISOString().substring(0, 16),
      });
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const handleOnSubmit = async () => {
    await updateTodo({
      ...todo,
      date: new Date(todo.date).getTime(),
    });
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h4>Update Todo</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Todo Title</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  value={todo.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Date / Time</label>
                <input
                  name="date"
                  type="datetime-local"
                  className="form-control"
                  value={todo.date}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3 px-5"
                  onClick={handleOnSubmit}
                >
                  Update Todo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
