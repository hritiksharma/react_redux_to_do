import './App.css';
import AddTodo from "./components/AddTodo"
import Todos from './components/Todos';
function App() {
  return (
    <>
      <h1>TO DO LIST</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
