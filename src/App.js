import "./App.css";
import { Increment } from "./components/IncrementDecerement";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h3>Increment & Decerement</h3>
      <Increment />
      <h3>Todo List</h3>
      <TodoList />
    </div>
  );
}

export default App;
