import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo__row complete" : "todo__row"}
          key={index}
        >
          <div key={todo.id} onclick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiDeleteBin6Line
              className="delete__icon"
              onClick={() => removeTodo(todo.id)}
            />
            <TiEdit
              className="edit__todo"
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            />
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Todo;
