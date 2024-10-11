import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = ({
  todo,
  setTodo,
  isEditing,
  setEditedName,
  setIsEditing,
  editedName,
}) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/todo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  }, [setTodo]);

  // Delete Todo
  const DeleteTodo = (id) => {
    axios
      .delete(`http://localhost:3000/api/todo/${id}`)
      .then((result) => {
        console.log("Todo deleted", result);
        return axios.get("http://localhost:3000/api/todo");
      })
      .then((res) => setTodo(res.data))
      .catch((err) => console.log("Error deleting todo", err));
  };

  const Inputopen = (todo) => {
    setIsEditing(todo._id);
    setEditedName(todo.name);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSave = (id) => {
    axios
      .put(`http://localhost:3000/api/todo/${id}`, { name: editedName })
      .then((res) => {
        console.log("Todo updated", res.data);
        setIsEditing(null);
        return axios.get("http://localhost:3000/api/todo");
      })
      .then((res) => setTodo(res.data))
      .catch((err) => console.log("Error updating todo", err));
  };

  return (
    <div className="row">
      <div className="col-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((todos) => (
              <tr key={todos._id}>
                <th scope="row">{todos._id.slice(3, 8)}</th>

                <td>
                  {isEditing === todos._id ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    todos.name
                  )}
                </td>

                <td>
                  {isEditing === todos._id ? (
                    <button
                      className="btn btn-success mx-1"
                      onClick={() => handleSave(todos._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => DeleteTodo(todos._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => Inputopen(todos)}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
