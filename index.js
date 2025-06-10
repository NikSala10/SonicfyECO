const express = require("express");
const path = require("path");
const { createServer } = require("http");
const cors = require('cors');

const usersRouter = require("./server/routes/users.router");
const startGameRouter = require("./server/routes/startGame.router");
const artistsRouter = require("./server/routes/artists.router");
const questionsRouter = require("./server/routes/questions.router");
const audioRouter = require("./server/routes/audio.router");
const { initSocketInstance } = require("./server/services/socket.service");

const PORT = 5058;
const app = express();
app.use(cors());
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/mupi-client", express.static(path.join(__dirname, "mupi-client")));
app.use("/telefono-client", express.static(path.join(__dirname, "telefono-client")));

// Routes
app.use("/", usersRouter);
app.use("/", startGameRouter);
app.use("/", artistsRouter);
app.use("/", questionsRouter);
app.use("/", audioRouter);

// Services
initSocketInstance(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
