const express = require("express");
const path = require("path");
const { createServer } = require("http");

const usersRouter = require("./server/routes/users.router");
const screen1EventsRouter = require("./server/routes/screen1Events.router");
const { initSocketInstance } = require("./server/services/socket.service");

const PORT = 5058;

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/mupi-client", express.static(path.join(__dirname, "mupi-client")));
app.use("/telefono-client", express.static(path.join(__dirname, "telefono-client")));

// Routes
app.use("/", usersRouter);
app.use("/", screen1EventsRouter);

// Services
initSocketInstance(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
