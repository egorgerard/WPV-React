import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ShowToDo from "./components/ShowToDo/ShowToDo";
import NewTask from "./components/NewTask/NewTask";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<ShowToDo />} />
        <Route exact path="/add" element={<NewTask />} />
      </Routes>
    </div>
  );
}

export default App;
