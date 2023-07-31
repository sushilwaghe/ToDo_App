import React from "react";

function Todolist(props) {
  return (
    <div className="add-list">
      <li>
        {props.item}
        <span className="del-btn">
          <i
            class="fa-solid fa-trash"
            onClick={() => props.deletetask(props.i)}></i>
        </span>
      </li>
    </div>
  );
}

export default Todolist;
