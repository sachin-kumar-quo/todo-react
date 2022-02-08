import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, getTodos } from "../utils/ApiFunctions";
import TodoItem from "./TodoItem";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getTodos();
      setTodos(data);
    };
    fetchData().catch((err) => console.log(err));
  }, [todos]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h4>Todos</h4>
            </div>
            <div className="card-body text-center">
              <Link to={"/create"}>
                <button className="btn btn-primary my-3 px-5">
                  Create Todo
                </button>
              </Link>
              <ul className="list-group">
                {todos.map((todo, index) => (
                  <li className="list-group-item" key={todo._id}>
                    <TodoItem todo={todo} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
