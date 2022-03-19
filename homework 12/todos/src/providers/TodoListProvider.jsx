import React from "react";

const initialState = {
  todoList: [],
};

const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  COMPLETE: "COMPLETE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM:
      return {
        todoList: [
          ...state.todoList,
          {
            Id: Math.random(),
            label: action.todoItemLabel,
            completed: false,
          },
        ],
      };
    case actions.REMOVE_TODO_ITEM: {
      const filteredTodoList = state.todoList.filter(
        (todoItem) => todoItem.Id !== action.todoItemId
      );
      return { todoList: filteredTodoList };
    }
    case actions.COMPLETE: {
      console.log(action);
      const updatedTodoList = state.todoList.map((todoItem) =>
        todoItem.Id === action.todoItemId
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
      console.log(updatedTodoList);
      return { todoList: updatedTodoList };
    }

    default:
      return state;
  }
};

export const TodoListContext = React.createContext(null);

export default function TodoListProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
    },
    complete: (todoItemId) => {
      dispatch({ type: actions.COMPLETE, todoItemId });
    },
  };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
}
