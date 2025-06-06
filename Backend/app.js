const dotenv = require("dotenv"); //dotenv is a Node.js library that lets you load environment variables from a .env file into your application.
dotenv.config(); //It loads the variables from your .env file into process.env. process.env is a global object in Node.js that holds all your environment variables.
// After calling dotenv.config()
const express = require("express");
const userRoutes = require("./routes/user.routes");
const cors = require("cors"); //CORS stands for Cross-Origin Resource Sharing.
// It’s a security feature built into browsers that controls which websites are allowed to make requests to your server.
const app = express();
const cookieParser = require("cookie-parser"); //cookie-parser is a middleware for Express.js that reads cookies attached to client requests and makes them easy to access in your server code. cookies are small piece of data stored  ii the users browser
const captainRoutes = require("./routes/captain.routes");

app.use(cors()); //This allows any frontend to access your backend
app.use(express.json()); //s a built-in middleware function in Express that tells the server to automatically parse JSON data coming from the client (frontend or Postman).
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.json());
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
