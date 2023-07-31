import React, { useState } from "react";

function Todoinput(props) {
  const [inputtext, setInputtext] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        value={inputtext}
        onChange={(e) => setInputtext(e.target.value)}
      />
      <button
        onClick={() => {
          props.addtask(inputtext);
          setInputtext(" ");
        }}>
        Add
      </button>
    </div>
  );
}

export default Todoinput;
