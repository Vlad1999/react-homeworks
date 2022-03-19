import React from "react";
import { TodoListContext } from "../../providers/TodoListProvider";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TodoList.css";

function TodoList() {
  const { todoList, removeTodoItem, complete } =
    React.useContext(TodoListContext);

  return (
    <ul>
      {todoList.map((todoItem) => (
        <li
          className={todoItem.completed ? "completed" : ""}
          key={todoItem.Id}
          onClick={() => complete(todoItem.Id)}
        >
          {todoItem.label}
          <button
            className="removeBtn"
            onClick={() => removeTodoItem(todoItem.Id)}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
