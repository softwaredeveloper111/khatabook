const express = require("express");
const taskModel = require("./model/tasks.model")
const cors = require("cors")
const path = require("path")
const app = express();


/**
 * application middleware
 */

app.use(express.json());
app.use(cors())
app.use(express.static("./public"));



/**
 * GET; /api/v1/tasks
 * fetch all the tasks from mongodb database and send the response to client. 
 */

app.get("/api/v1/tasks",async (req,res)=>{
   const tasks = await taskModel.find();

   res.status(200).json({
    message:"all tasks fetch sucessfully",
    tasks
   })

})



/**
 * POST; /api/v1/tasks
 * crate a new task and save the data in database 
 * req.body={title,description,date}
 */

app.post("/api/v1/tasks",async(req,res)=>{
   const {title,description,date} = req.body;

   const task = await taskModel.create({
    title,description,date
   })

   res.status(201).json({
    message:"task created sucessfully",
    task
   })
})



/**
 * GET; /api/v1/tasks/id
 * fetch a single task from database through _id and send the response to the client
 */

 app.get("/api/v1/tasks/:id",async (req,res)=>{
  const id = req.params.id;

  const task = await taskModel.findById(id)

  res.status(200).json({
    message:"task fetch sucessfully",
    task
  })
 })



 /**
  * DELETE; /api/v1/tasks/id
  * delete a particular task from database . and send acknowledgement to client.
  */

 app.delete("/api/v1/tasks/:id", async (req,res)=>{
  const id = req.params.id;

  await taskModel.findByIdAndDelete(id);
  
  res.status(204).json({
    message:"task delete sucessfully"
  })
 })




 /**
  * PATCH; /api/v1/tasks/id
  * update description part of a task , save it db and send the updated result to client
  */
  
 app.patch("/api/v1/tasks/:id",async (req,res)=>{
   const {title, description} = req.body;
   const id = req.params.id;

   const updateTask = await taskModel.findByIdAndUpdate(id,{title,description})

   res.status(200).json({
    message:"task updated sucessfully",
    updateTask
   })
 })



 /**
  * wild cart route
  */

 app.use("*name",(req,res)=>{
   res.sendFile(path.join(__dirname,"..","/public/index.html"))
 })



module.exports = app;