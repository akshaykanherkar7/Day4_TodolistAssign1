import "./App.css";
import Todo from "./Components/Todo";
import Complited from "./Components/Complited";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]); //""

  return (
    <div className="App">
      <Todo data={data} setData={setData}></Todo>
      <div>
        <button
          style={{
            padding: `8px`,
            borderRadius: `6px`,
            border: `transparent`,
            backgroundColor: `teal`,
            color: `white`,
            marginTop: `10px`,
          }}
          onClick={() => {
            if (toggle === true) {
              setToggle(false);
            } else {
              setToggle(true);
            }
          }}
        >
          {toggle ? "HIDE COMPLETED TO-DOS" : "SHOW COMPLETED TO-DOS"}
        </button>
        {toggle ? <Complited data={data} /> : null}
      </div>
    </div>
  );
}

export default App;
