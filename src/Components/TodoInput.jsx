import React, { useState } from "react";

const TodoInput = ({ status, value, deleteTodo }) => {
  const [line, setLine] = useState(false);

  return (
    <div
      className="input"
      style={
        line === true
          ? { backgroundColor: `#e4f2fd` }
          : { textDecoration: `none` }
      }
    >
      <div style={{ display: `flex`, gap: `12px`, marginLeft: `-35px` }}>
        <div>
          {status ? (
            <div>
              <input type="checkbox" defaultChecked />
            </div>
          ) : (
            <input
              type="checkbox"
              onClick={() => {
                if (line === false) {
                  setLine(true);
                } else {
                  setLine(false);
                }
              }}
            />
          )}
        </div>
        {status ? (
          <div style={{ textDecoration: `line-through` }}>{value}</div>
        ) : (
          <div
            style={
              line === true
                ? { textDecoration: `line-through` }
                : { textDecoration: `none` }
            }
          >
            {value}
          </div>
        )}
      </div>
      <button
        style={{
          padding: `7px 10px 7px 10px`,
          marginRight: `-50px`,
          borderRadius: `8px`,
          border: `transparent`,
          color: `white`,
          backgroundColor: `teal`,
        }}
        onClick={() => deleteTodo(value)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoInput;
