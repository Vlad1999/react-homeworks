import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "./todosSlice";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const renderTodoList = todos.map((todo) => (
    <div className="listItem" key={todo.id}>
      <input
        type="checkbox"
        onChange={() => dispatch(completeTodo({ todoId: todo.id }))}
        checked={todo.completed}
      />
      <span>{todo.label}</span>
      <button
        className="removeBtn"
        onClick={() => dispatch(removeTodo({ todoId: todo.id }))}
      >
         <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
  ));

  return <div className="todoList">{renderTodoList}</div>;
};
