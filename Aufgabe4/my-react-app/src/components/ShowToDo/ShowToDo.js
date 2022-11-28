import "./ShowToDo.css";
import { useState, useEffect } from "react";

import Task from "../../components/Task/Task";
import Content from "../../components/Content/Content";
const ShowToDo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) {
      setTasks([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
      ]);
    }
    /*** */
  }, []);

  const moveTask = (taskId) => {
    const taskIndex = tasks.findIndex((v) => {
      return v.id === taskId;
    });

    const task = { ...tasks[taskIndex] };
    task.completed = !task.completed;

    const tasksCopy = [...tasks];
    tasksCopy[taskIndex] = task;
    setTasks(tasksCopy);

    /*** */
  };

  const deleteTask = (taskId) => {
    const taskIndex = tasks.findIndex((v) => {
      return v.id === taskId;
    });
    const task = { ...tasks[taskIndex] };
    const tasksCopy = [...tasks];
    tasksCopy.splice(taskIndex, 1);
    setTasks(tasksCopy);

    /** */
  };

  const completedTasks = [];
  const openTasks = [];
  for (const task of tasks) {
    if (task.completed) {
      completedTasks.push(
        <Task
          task={task}
          key={task.id}
          moveTask={() => moveTask(task.id)}
          delteTask={() => deleteTask(task.id)}
        />
      );
    } else {
      openTasks.push(
        <Task
          task={task.id}
          key={task.id}
          moveTask={() => moveTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
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
