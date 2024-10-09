import axios from "axios";
import { useRef } from "react";

const Input = ({ setChange, Change, setTodo }) => {
  const nameref = useRef();

  const PushData = () => {
    const todoName = Change;

    axios
      .post("http://localhost:3000/api/todo", { name: todoName })
      .then((result) => {
        console.log("Data send", result);
        nameref.current.value = "";
        return axios.get("http://localhost:3000/api/todo");
      })
      .then((res) => setTodo(res.data))
      .catch((err) => console.log("Error deleting todo", err));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      PushData();
    }
  };

  return (
    <div className="row">
      <div className="col-6 d-flex">
        {" "}
        <input
          className="form-control"
          ref={nameref}
          onKeyDown={handleKeyPress}
          onChange={() => setChange(nameref.current?.value)}
        />
        <button className="btn btn-primary mx-3" onClick={() => PushData()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
