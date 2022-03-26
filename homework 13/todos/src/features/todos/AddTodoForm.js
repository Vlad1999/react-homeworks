import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddTodoForm = () => {
  const [label, setLabel] = useState("");

  const dispatch = useDispatch();

  const onLabelChanged = (e) => setLabel(e.target.value);

  const onAddTodoCLicked = () => {
    if (label) {
      dispatch(
        addTodo({
          id: nanoid(),
          label,
          completed: false,
        })
      );
      setLabel("");
    }
  };

  return (
    <section>
      <h2>todos..</h2>
      <form
        className="todoForm"
        onSubmit={(e) => {
          e.preventDefault();
          onAddTodoCLicked();
        }}
      >
        <input type="text" value={label} onChange={onLabelChanged} />
        <button type="submit">
          {" "}
          <FontAwesomeIcon icon={faAdd} />
        </button>
      </form>
    </section>
  );
};
