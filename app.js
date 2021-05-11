const express = require("express");

const app = express();

const listsRoutes = require("./api/routes/lists");

app.use("/lists", listsRoutes);

module.exports = app;
