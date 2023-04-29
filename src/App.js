import "./App.css";
import { useState } from "react";
function App() {
  const [todolist, setlist] = useState([]);
  const [input_text, set_text] = useState("");
  const handletext = (event) => {
    set_text(event.target.value);
  };
  const updatelist = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      task_name: input_text,
      completed: false,
    };
    setlist(task.task_name !== "" ? [...todolist, task] : todolist);
  };
  const deleteitem = (id) => {
    setlist(todolist.filter((task) => task.id != id));
  };
  const complete_task = (id) => {
    setlist(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="Addtask">
        <label for="textinput">Write down the task</label>
        <br />
        <input
          type="text"
          placeholder="add something"
          id="textinput"
          onChange={handletext}
        />
        <button onClick={updatelist}>add</button>
      </div>
      <hr />
      <div>
        {todolist.map((item) => {
          return (
            <div
              className="list"
              style={{ backgroundColor: item.completed ? "green" : "blue" }}
            >
              <h1>{item.task_name}</h1>
              <button onClick={() => complete_task(item.id)}>Complete</button>
              <button onClick={() => deleteitem(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
