var server = require('connect');
server().use(server.static(__dirname)).listen(Number(process.env.PORT || 8080));
console.log("The server is now running on http://localhost:8080");