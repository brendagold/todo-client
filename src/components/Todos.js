import React, { useEffect, useState } from "react";
import api from "../services/api";
import AddTodo from "./AddTodo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await api.get("/todos");
    setTodos(response.data);
  };

  const handleDelete = async (e) => {
    let id = e.target.parentElement.dataset.id;
    const response = await api.delete(`/deletetodo/${id}`);
    window.location.reload(false);
    
  };

  const handleCreate = (todos) => {
      setTodos(todos)
  }

  
  const handleUpdate = async (e) => {
    let id = e.target.parentElement.dataset.id;
    const response = await api.post(`/updatetodo/${id}` );

    if (response.status == 201) {
      setTodos(response.data);
      
    }
  };
  

  return (
    <>
    <AddTodo handleCreate={handleCreate}/>
      {todos.map((todo) => (
        <div
          className="text-dark text-left p-1 bg-light mt-3 border-bottom"
          key={todo._id}
          data-id={todo._id}
        >
          <h3 style={{textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title} </h3>
          <span className=" d-flex justify-content-end" data-id={todo._id}>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={todo.completed}
              onChange={handleUpdate}
              className="m-2"
            />
            <i
              className="far fa-times-circle fa-2x text-danger ml-5"
              onClick={handleDelete}
            ></i>
          </span>
        </div>
      ))}
    </>
  );
};

export default Todos;
