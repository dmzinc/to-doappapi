const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//Create express app
const app = express();

//Database
mongoose.connect(
  "mongodb+srv://forbes:forbes22@to-do-app-api.xvrdf.mongodb.net/forbes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//Database
const db = mongoose.connection;

db.once("open", () => {
  console.log("connected to mongo db ");
});

//Middleware
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

const ListsRoute = require("./routes/Lists");

app.use("/lists", ListsRoute);

//Starting Server
app.listen(8000, () => console.log("server started "));
