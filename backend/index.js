const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] }, 
}); 
 


const startupRouter = require("./routers/startupRouter"); //importing
const investorRouter = require("./routers/investorRouter"); //importing
const adminRouter = require("./routers/adminRouter"); //importing
const contactRouter = require("./routers/contactRouter"); //importing
const utilRouter = require("./routers/util");//importing
 

const cors = require("cors");  

// middleware to convert client json data to javascript
app.use(express.json());
//cors is used to allow request from outside server
app.use(cors({ origin: ["http://localhost:3000"] }));

//middleware
app.use("/startup", startupRouter);
app.use("/investor", investorRouter);
app.use("/admin", adminRouter);
app.use("/contact", contactRouter);
app.use("/util", utilRouter);


//starting the server
httpServer.listen(port, () => {
  console.log("server started");
});