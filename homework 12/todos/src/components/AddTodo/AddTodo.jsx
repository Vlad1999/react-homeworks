import React, { useState } from "react";
import { TodoListContext } from "../../providers/TodoListProvider";
import "./AddTodo.css";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const { addTodoItem } = React.useContext(TodoListContext);

  return (
    <>
      <h1>todos..</h1>
      <form className="todoForm">
        <input
          type="text"
          value={inputValue}
          placeholder="add new todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            (inputValue ? addTodoItem(inputValue) : console.log("input is empty"))
            setInputValue("");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </>
  );
}

export default AddTodo;
