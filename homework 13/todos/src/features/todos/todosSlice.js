import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      const { todoId } = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
    completeTodo(state, action) {
      const { todoId } = action.payload;
      return state.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
