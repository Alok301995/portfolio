const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const messageRoute = require("./Routes/submitQuery");

server.use(express.json());
server.use(cors());
server.use("/message", messageRoute);

// Database connection
mongoose.connect(
  "mongodb+srv://Alok1995:Alok.1995@cluster0.ejrec.mongodb.net/",
  {
    dbName: "portfolio",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("Connected");
});
mongoose.connection.on("error", () => {
  console.log("error connecting mondo db ");
});

// For production

if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));

  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
