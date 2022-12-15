import React from "react";
import "./ShowToDo.css";
import Task from "../../components/Task/Task";
import Content from "../../components/Content/Content";
import axios from "../../axios";

import { useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { loadTodos, deleteTaskId, changeTaskState } from "../../reducer/reducer";

const ShowToDo = () => {
  //const [tasks, setTasks] = useState([]);

  const tasks = useSelector((state)=>{return state.todos})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());

    /*
    if (tasks.length === 0) {
      axios.get('/tasks').then((res) => {
          setTasks(res.data);
          console.log(res.data)
        }).catch((err) => {
          console.log(err);
        });
    }
    */
  }, []);

  const moveTask = (taskId) => {                     
    const taskIndex = tasks.findIndex((v) => {return v._id === taskId;});
    const task = { ...tasks[taskIndex] };
    //task.completed = !task.completed; //6.2 auskommentiert
    //const tasksCopy = [...tasks]; //6.2 auskommentiert
    //tasksCopy[taskIndex] = task; //6.2 auskommentiert

    axios.put('/task',{...task}).then((res) => {
        //setTasks(tasksCopy);
        //6.2
        dispatch(changeTaskState({taskId}))
      }).catch((err) => {
        console.log(err);
      });
  };



  const deleteTask = (taskId) => {
    //const taskIndex = tasks.findIndex((v) => {return v.id === taskId;}); // 6.2 auskommentiert
    //const tasksCopy = [...tasks]; // 6.2 auskommentiert
    //tasksCopy.splice(taskIndex, 1); // 6.2 auskommentiert
    
    axios.delete(`/task/${taskId}`).then((res) => {
        //setTasks(tasksCopy); // 6.2 auskommentiert
        // 6.2
        dispatch(deleteTaskId({taskId})) 
      }).catch((err) => {
        console.log(err);
      });
  };

  const completedTasks = [];
  const openTasks = [];
  for (const task of tasks) {
    if (task.completed) {
      completedTasks.push(
        <Task
          task={task}
          key={task._id}
          moveTask={() => moveTask(task._id)}
          deleteTask={() => deleteTask(task._id)}
        />
      );
    } else {
      openTasks.push(
        <Task
          task={task}
          key={task._id}
          moveTask={() => moveTask(task._id)}
          deleteTask={() => deleteTask(task._id)}
        />
      );
    }
  }

  return (
    <Content>
      <div className="ShowToDo">
        <div className="ShowToDo__Wrapper">
          <h2>
            Open
            <hr />
          </h2>
          <div>{openTasks}</div>
        </div>
        <div className="ShowToDo__Wrapper">
          <h2>
            Completed
            <hr />
          </h2>
          <div>{completedTasks}</div>
        </div>
      </div>
    </Content>
  );
};

export default ShowToDo;
