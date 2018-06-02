var db = require("../models");

exports.getTodos = function(req, res){
// console.log(db.Todo.find());
  db.Todo.find()
  .then(function(todos){
    res.json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.createTodo = function(req,res){
  db.Todo.create()
  .then(function(newTodo){
    res.status(201).json(newTodo);
  })
  .catch(function(err){
    res.send(err);
  });
}
exports.getTodo = function(req, res){
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo){
    res.json(foundTodo);
  })
  .catch(function(err){
    res.send(err);
  });
}
exports.updateTodo = function(req,res){
  db.Todo.findOneAndUpdate({_id: req.params.todoId},req.body,{new:true})
  .then(function(todo){
    req.json(todo);
  })
  .catch(function(err){
    res.send(err);
  });
}

exports.deleteTodo = function(req,res){
  db.Todo.remove({_id:req.params.todoId})
  .then(function(todo){
    res.send(todo);
  })
  .catch(function(err){
    res.send(err);
  });
}

module.exports = exports;
