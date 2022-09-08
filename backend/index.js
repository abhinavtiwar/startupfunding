const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});



const userRouter = require("./routers/userRouter"); //importing
const utilRouter = require("./routers/util");
const cors = require("cors");

// middleware to convert client json data to javascript
app.use(express.json());
//cors is used to allow request from outside server
app.use(cors({ origin: ["http://localhost:3000"] }));

//middleware
app.use("/user", userRouter);

//starting the server
httpServer.listen(port, () => {
  console.log("server started");
});