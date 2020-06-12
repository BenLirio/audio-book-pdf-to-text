console.log("sterted");

const net = require("net");
const { Socket } = require("dgram");

// const server = net.createServer((connection) => {
//   console.log("client connected");

//   connection.on("end", () => {
//     console.log("client disconnected");
//   });
// });

const server = net.createServer();
server.on("connection", (socket) => {
  console.log("client connected");
  socket.on("data", (data) => {
    console.log(data);
  });
});

server.listen(8080, () => {
  console.log("server is listening");
});
