
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import TodoListProvider from './providers/TodoListProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <AddTodo />
        <TodoList />
      </TodoListProvider>
    </div>
  );
}

export default App;
