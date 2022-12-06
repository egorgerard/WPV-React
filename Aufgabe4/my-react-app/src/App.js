import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

//import Person from "./components/newComponent/Person";
import NewTask from "./components/NewTask/NewTask";
import ShowToDo from "./components/ShowToDo/ShowToDo";
import Header from "./components/Header/Header";
//import Task from "./components/Task/Task";

class App extends Component {
  render() {
    return (
      /*<div className='App'>
        <Person name="Hans" age="49" >Rentner</Person>
        //<Person name="Dedf" age="22"/> test 1 2 1 2 
        </div>
      */
      <div className="App">
        <Header />
        <ShowToDo />
        <NewTask />
      </div>
    );
  }
}

export default App;
