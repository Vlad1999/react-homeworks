import { configureStore } from "@reduxjs/toolkit";
import  todosReduser  from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReduser,
  }
});
