import ToDoList from "./components/ToDoList";
import "./App.css";
import wormImage from "./img/worm.png";

function App() {
  return (
    <>
      <ToDoList />
      <img src={wormImage} alt="Picture of Worms game" className="worm" />
    </>
  );
}

export default App;
