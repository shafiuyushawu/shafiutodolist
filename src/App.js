import "./App.css";
import TodoList from "./TodoComponents/TodoList";

function App() {
  return (
    <div className="app__todo">
      <h1 className="app__todo-title">Shafiu Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
