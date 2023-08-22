import "../styles/App.css";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Home = () => {
  let [todos, setTodos] = useState([]);
  let [initialValue, setInitialValue] = useState("");

  let handleChange = (evn) => {
    evn.preventDefault();
    setInitialValue(evn.target.value);
  };

  let handleAddTodo = () => {
    if (initialValue !== "") {
      let allTodos = [...todos];
      allTodos.push({
        _id: Math.random(),
        title: initialValue,
      });
      setTodos(allTodos);
    }
  };

  let handleAddTodoEnter = (event) => {
    if (event.keyCode === 13) {
      handleAddTodo();
    }
  };

  let handleTodoDelBtn = (todoItemId) => {
    let removedTodos = todos.filter((todoItem) => {
      return todoItem._id !== todoItemId;
    });
    console.log(removedTodos);
    setTodos(removedTodos);
  };

  return (
    <div>
      <h1 className="todo-main-title ">Todo App</h1>
      <div className="todos-area">
        <input
          className="todo-input"
          type="text"
          placeholder="Input Your Todo"
          onChange={handleChange}
          onKeyDown={handleAddTodoEnter}
        />
        <input
          className="todo-add-btn"
          type="button"
          value="Add Todo"
          onClick={handleAddTodo}
        />
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          handleTodoDelBtn={handleTodoDelBtn}
        />
      ))}
    </div>
  );
};

export default Home;
