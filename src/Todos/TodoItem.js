import React, { useState } from "react";
import { Link } from "react-router-dom";
import pencilSquare from "../assets/pencil-square.svg";
import trash from "../assets/trash.svg";
import { deleteTodo, updateTodo } from "../utils/ApiFunctions";

function TodoItem({ todo }) {
  const [todoItem, setTodoItem] = useState(todo);

  const handleCheckChange = (e) => {
    updateTodo({ ...todoItem, isCompleted: e.target.checked });
    setTodoItem({ ...todoItem, isCompleted: e.target.checked });
  };
  return (
    <div className="row">
      <div className="custom-control custom-checkbox col-1">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
          checked={todoItem.isCompleted}
          onChange={handleCheckChange}
        />
      </div>
      <span className="custom-control-label col-5">
        {todoItem.title}
      </span>
      <span className="custom-control-label col-4">
        {new Date(todoItem.date).toDateString()}
      </span>
      <Link
        to={`/edit/${todoItem._id}`}
        className="col-1 text-center"
      >
        <img src={pencilSquare} className="img-fluid" alt="edit" />
      </Link>
      <div
        className="col-1 text-center"
        onClick={() => deleteTodo(todoItem._id)}
      >
        <img src={trash} className="img-fluid" alt="delete" />
      </div>
    </div>
  );
}

export default TodoItem;
