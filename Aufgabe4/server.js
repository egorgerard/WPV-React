const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require("cors");
//const { default: Task } = require("../Aufgabe4/my-react-app/src/components/Task/Task");
const { isFulfilled } = require("@reduxjs/toolkit");
const { response } = require("express");
//const { application } = require('express');
//const { response } = require('express');
const app = express();

const port = 3005;
app.listen(port, () => {
  console.log(`Example server listening at
                    http://localhost:${port}`);
});

// JavaScript Object which we will change with the routes
/*
{
    beauftrager:"Jey",
    id:"1234",
    aufgabe:"putzen"

    id:1,
    title:"Test"
    completed:"False"
}
*/
const data = { to_do: [] };

let id_count = 1;

// We specify which URL is allowed to make request to our API Server
// Origin specifies which url is allowed to make request
// credentials specifies that header not omitted and is passed on
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

                // 6.2
        // to_do// async vor die ()
app.get("/tasks", (request, res) => {
  res.status(200).send(data.to_do)
/*
  if(request.query.title){
    let tasksTitle = [];
    for(let task of data.tasks){
      if(task.title == request.query.title){
        tasksTitle.push(task);
      }
    }
    response.status(400).send(tasksTitle)
  } else{
    let tasks = await Task.find();
    response.status(200).send(tasks)
  }

/*
  if (request.query.beauftragter) {
    let task_beauftragter = [];
    for (let task of data.to_do) {
      if (task.beauftragter == request.query.beauftragter) {
        task_beauftragter.push(task);
      }
    }
    response.status(200).send(task_beauftragter);
  } else {
    response.status(200).send(data.to_do);
  }
*/
});

app.post("/task", (req, res) => {
  let newTask = req.body;

  data.to_do.push({
    title:newTask.title,
    id:id_count,
    completed:newTask.completed
  })

  res.status(200).send("Task added")
  id_count++;

  // 6.2 Vorlesung 
  /*
  newTask.completed = false;
  if(newTask.title != ''){
    let task = new Task(newTask);
    task.save((err)=>{
      if(err){
        res.status(200).send("An error occurred!");
      } else {
        res.status(200).send("New item added!");
      }
    })
  } else{
    res.status(400).send("data have the wrong format" + "or are not completed")
  }

  */
});

app.put("/task", (req, res) => {
  let taskToChange = req.body;
  let searchedTaskIndex = data.to_do.findIndex((v) => v.id === taskToChange.id)

  if(searchedTaskIndex != -1){
    data.to_do[searchedTaskIndex].title = taskToChange.title;
    data.to_do[searchedTaskIndex].completed = taskToChange.completed;
    res.status(200).send("Task was updated")
  } else{
    res.status(400).send("Task was not found")
  }

  // 6.2 Vorlesung
  /*
  let taskToChange = req.body;
  if(taskToChange.title != '' && taskToChange._id != null && taskToChange.completed != null){
    let updatedTaskData = {
      title:taskToChange.title,
      completed:!taskToChange.completed
    }
    Task.findByIdAndUpdate({_id:taskToChange._id},updatedTaskData, (err,result)=>{
      if(err){
        res.status(422).send("Data are not correct!");
      }else{
        res.status(201).send("Update was successfull");
      }
    });
  } else{
    res.status(400).send("data have the wrong format"+ "or are not complete")
  }
  */
});

app.delete('/task/:id', (req, res) => {
  const id = req.params.id
  try{
    if(id > 0){
      //console.log(data)
      let searchedTaskIndex = data.to_do.findIndex((v) => v.id == id)
      if(searchedTaskIndex != -1){
        data.to_do.splice(searchedTaskIndex,1)
        res.status(200).send("Task was deleted")
      } else {
          res.status(400).send("Task was not found!")
        }
    } else{
      res.status(400).send("Data has the wrong format or isnt completed");
    }} catch(error){

    }
  // 6.2 Vorlesung
  /*
  try{
    Task.deleteOne({_id:id}).then(() =>{
      res.status(200).send("task was deleted");
    }).catch(err=>{
      res.status(500).send(`task could not be deleted ! /n err:${err}`)
    })
  } catch(error){
    let errorObj = {body:req.body, errorMessage:"Server error!"};
    res.status(500).send(errorObj);
  }
  */
});
