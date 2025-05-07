const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const http = require("http");
// Load environment variables
require("dotenv").config();

// Create express app and add middlewares
const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: process.env.CLIENT || "http://localhost:5173", // Allow the frontend origin
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());

// Middleware for error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server error");
});
app.get("/", (req, res) => {
  res.send("<h1>Saraswati Academy</h1>");
});
const routes = require("./routes/routes");
app.use("/api", routes);

// Test routes

// Start server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server and Socket.io are running on port ${PORT}`);
});
