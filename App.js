import { useState } from "react";
import "./App.css";
import Todoinput from "./Components/Todoinput";
import Todolist from "./Components/Todolist";

function App() {
  const [todolist, setTodolist] = useState([]);
  function addtask(inputtext) {
    console.log(inputtext);
    if (inputtext !== " ") {
      setTodolist([...todolist, inputtext]);
    }
  }
  function deletetask(key) {
    let newtodolist = [...todolist];
    newtodolist.splice(key, 1);
    setTodolist([...newtodolist]);
  }
  return (
    <div className="App">
      <Todoinput addtask={addtask} />
      <ul>
        {todolist.map((listitem, index) => {
          return (
            <Todolist
              item={listitem}
              key={index}
              i={index}
              deletetask={deletetask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
