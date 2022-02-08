const url = process.env.REACT_APP_SERVER + "/todo";

export const getTodos = async () => {
  const data = await fetch(url);
  const todos = await data.json();
  return todos;
};

export const updateTodo = async (todo) => {
  return await fetch(`${url}/${todo._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const createTodo = async (todo) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const deleteTodo = async (id) => {
  return await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};

export const getTodo = async (id) => {
  const data = await fetch(`${url}/${id}`);
  return data.json();
};
