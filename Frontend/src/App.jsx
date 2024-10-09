import { useState, useEffect } from "react";
import Input from "./Input";
import TodoList from "./TodoList";

function App() {
  const [update, setUpdate] = useState();
  const [change, setChange] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Input
        update={update}
        setUpdate={setUpdate}
        setChange={setChange}
        Change={change}
        setTodo={setTodo}
      />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
