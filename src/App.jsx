import "./App.css";
import Button from "./components/Button.jsx";
import Heading from "./components/Heading.jsx";
import Todoitem from "./components/Todoitem.jsx";
import CounterComponent from "./components/CounterComponent.jsx";

function App() {
  return (
    <div className="todo-container">
      <CounterComponent/>
      <Heading head = "ToDo-App" />
      <Todoitem text = "Eat"/>
      <Todoitem text = "study"/>
      <Todoitem text = "play"/>
      <Todoitem completed = {true} text = "code"/>
      <Todoitem text = "sleep"/>
      <Button/>
    </div>
  );
}

export default App;
