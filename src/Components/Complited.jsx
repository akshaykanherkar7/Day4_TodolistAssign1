import React from "react";
import TodoList from "./TodoList";

const Complited = ({ data }) => {
  // const [name, setName] = useState([]);
  // console.log(props.data.value);
  // const deleteTodo =(data)= {

  // }
  return (
    <div className="list">
      <TodoList todos={data} />
    </div>
  );
};

export default Complited;
