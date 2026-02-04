const mongoose = require("mongoose");



const taskSchema = new mongoose.Schema({
  title:String,
  description:String,
  date:String
})

const taskModel = mongoose.model("task",taskSchema)

module.exports = taskModel;