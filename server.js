console.log("server is running");

var express = require("express");
//store express module in a variable

var app = express();

var port = 3000;

app.use(express.static('public'));
//make other devices use the elements inside the public folder

var server = app.listen(port);

console.log("http://localhost:" + port);

var socket = require("socket.io");
//store socket module in a variable, we can handle events and communications about events

//now we need to activate the event
var io = socket(server);

io.on("connection", newConnection);

              //we want to have all infos about connection
function newConnection(socket){
  console.log(socket.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(receiveData){
    console.log(receiveData);

    socket.broadcast.emit("mouseBroadcast", receiveData);
  }
}
