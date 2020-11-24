const path = require("path");
const express = require("express");
const cors = require("cors");
const db = require("diskdb");
const notesRouter = require("./routes/notes");

// Global constants
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use("/notes", notesRouter);

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// connect to db
db.connect("./data", ["notes"]);

// Server
app.listen(port, console.log("Server is running on port:", port));
