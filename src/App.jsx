import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import From from "./components/From";
import Navbar from "./components/Navbar";
import { tasks } from "./data";
import Tasks from "./components/Tasks";

function App() {
  const allTask = tasks;  

  return (
    <>
      <div className="container">
        <Navbar />
        <From />
        <Tasks allTask ={allTask}/>
      </div>
    </>
  );
}

export default App;
