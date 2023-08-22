import React from "react";

function TodoItem({ todo, handleTodoDelBtn, handleClick }) {
  return (
    <div className="todo-container">
      <div
        className="todo-item"
        key={todo._id}
        onClick={() => {
          handleClick();
        }}
      >
        {todo.title}
      </div>
      <button
        onClick={() => {
          handleTodoDelBtn(todo._id);
        }}
        className="todo-item-delBtn"
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
