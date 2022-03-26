import React from 'react';
import './App.css';
import { AddTodoForm } from './features/todos/AddTodoForm';
import { TodoList } from './features/todos/TodoList';

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
