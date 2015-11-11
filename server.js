var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT || 3000;
	
var server = connect().use(
	serveStatic(__dirname + '/')
).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server running on: ", addr.address + ":" + addr.port);
})