import React from "react";

const Todoitem = (props) => {
  return (
    <li className="todo-item">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span className="todo-item-txt">{props.text}</span>
      </span>

      <p>...</p>
    </li>
  );
};
export default Todoitem;
