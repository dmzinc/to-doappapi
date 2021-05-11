const express = require("express");

const app = express();

const morgan = require("morgan");

const listsRoutes = require("./api/routes/lists");

//Routes which handles requests
app.use("/lists", listsRoutes);

module.exports = app;
