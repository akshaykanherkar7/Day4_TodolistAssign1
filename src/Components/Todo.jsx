import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

let TodoBox = {
  // border: `1px solid red`,
  width: `fit-content`,
  margin: `auto`,
  padding: `30px`,
  backgroundColor: `#e2d9bc`,
  marginTop: `20px`,
};

let inputBox = {
  display: `flex`,
  gap: `10px`,
};

let addbtn = {
  width: `15%`,
  height: `60px`,
  // border: `1px solid red`,
  marginTop: `10px`,
  borderRadius: `15px`,
  fontSize: `26px`,
  color: `black`,
  border: `transparent`,
  backgroundColor: `white`,
};

const Todo = ({ data, setData }) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: value,
      },
    ]);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo.value !== value));

    setData([
      ...data,
      {
        id: uuidv4(),
        value: value,
      },
    ]);
  };

  return (
    <div style={TodoBox}>
      <h1>TodoApp</h1>
      <div style={inputBox}>
        <input
          className="input"
          type="text"
          value={value}
          placeholder="Write Something"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          style={addbtn}
          onClick={() => {
            addTodo(value);
            setValue("");
          }}
        >
          +
        </button>
      </div>
      <div className="list">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
