import { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";

function App() {
  const [update, setUpdate] = useState();
  const [change, setChange] = useState("");
  const [todo, setTodo] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editedName, setEditedName] = useState("");

  return (
    <>
      <Input
        update={update}
        setUpdate={setUpdate}
        setChange={setChange}
        Change={change}
        setTodo={setTodo}
      />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        isEditing={isEditing}
        setEditedName={setEditedName}
        editedName={editedName}
        setIsEditing={setIsEditing}
      />
    </>
  );
}

export default App;
