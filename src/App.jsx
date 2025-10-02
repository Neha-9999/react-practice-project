import "./App.css";
import Button from "./components/Button.jsx";
import Heading from "./components/Heading.jsx";
import Todoitem from "./components/Todoitem.jsx";

function App() {
  return (
    <div className="todo-container">
      <Heading />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Button/>
    </div>
  );
}

export default App;
