const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
var cors = require('cors');
//const { application } = require('express');
//const { response } = require('express');
const app = express();



const port = 3005;
app.listen(port, () => {
    console.log(`Example server listening at
                    http://localhost:${port}`)
})




// JavaScript Object which we will change with the routes
/*
{
    beauftrager:"Jey",
    id:"1234",
    aufgabe:"putzen"
}
*/
const data ={to_do:[]};

// We specify which URL is allowed to make request to our API Server
// Origin specifies which url is allowed to make request
// credentials specifies that header not omitted and is passed on
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());

/*
app.get('/', (request, response)=>{
    response.status(200).send("Hello World!");
})

app.post('/add', (req, res)=>{
    res.status(200).send("New item added!");
})

app.post('/change', (req, res)=>{
    res.status(200).send("Item updated!");
})

app.post('/delete', (req, res)=>{
    res.status(200).send("Item deleted!");
})



*/

app.get('/to_do', (request, response)=>{
    if(request.query.beauftragter){
        let task_beauftragter = [];
        for(let task of data.to_do){
            if(task.beauftragter == request.query.beauftragter){
                task_beauftragter.push(task);
            }
        }
        response.status(200).send(task_beauftragter)
    }else{
        response.status(200).send(data.to_do)
    }
})


app.post('/to_do', (req,res)=>{
    let newTask = req.body;
    if(newTask.beauftragter != ''
        && (newTask.id.length > 0 || newTask.id.length < 4)
        && newTask.aufgabe != ''){
            data.to_do.push({
                beauftragter:newTask.beauftragter,
                aufgabe:newTask.aufgabe,
                id:newTask.id
            })
            res.status(200).send("New item added!");
        }else{
            res.status(400).send("data gave the wrong foramt " + 
                        "or are not complete");
        }
});

app.put('/to_do', (req,res)=>{
    let taskToChange = req.body;
    if(taskToChange.beauftragter != ''
    && (taskToChange.id.length > 0 || taskToChange.id.length < 4)
    && (taskToChange.id_search.length > 0 || taskToChange.id_search.length < 4)
    && taskToChange.aufgabe != ''){
        let searchedTaskIndex = data.to_do.findIndex(
                                    (v)=>v.id == taskToChange.id_search)
        if(searchedTaskIndex != -1){
            data.to_do[searchedTaskIndex].aufgabe = taskToChange.aufgabe;
            data.to_do[searchedTaskIndex].id = taskToChange.id;
            data.to_do[searchedTaskIndex].beauftragter = taskToChange.beauftragter;
            res.status(200).send("Task was updated");
        }else{
            res.status(400).send("Task not found!");
        }
    }else{
        res.status(400).send("data have the wrong format" + "or are not complete");
    }
})

app.delete('/to_do', (req,res)=>{
    const id = req.body.id
    if(id.length == 3 || id.length == 5){
        let searchedTaskIndex = data.to_do.findIndex((v)=>v.id == id)
        if(searchedTaskIndex != -1){
            data.to_do.splice(searchedTaskIndex,1)
            res.status(200).send("Task was deleted");
        }else{
            res.status(400).send("Task not found!");
        }
    }else{
        res.status(400).send("Data have the wrong format" + "or are not complete");
    }
})

