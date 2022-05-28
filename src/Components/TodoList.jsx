import React from "react";
import TodoInput from "./TodoInput";

const TodoList = ({ todos,deleteTodo }) => {
  return (
    <div>
      <h3>
        {todos.map((todo) => (
          <TodoInput key={todo.id} value={todo.value} status={todo.status} deleteTodo={deleteTodo} />
        ))}
      </h3>
    </div>
  );
};

export default TodoList;
