const express = require("express");

const router = express.Router();

const List = require("../models/Lists");

//Get all routes
router.get("/", async (req, res) => {
  const lists = await List.find();

  res.json(lists);
});

//Create new list
router.post("/new", async (req, res) => {
  const newList = new List(req.body);

  const savedList = await newList.save();

  res.json(savedList);
});

//Get a specific list
router.get("/get/:id", async (req, res) => {
  const q = await List.findById({ _id: req.params.id });

  res.json(q);
});

//Delete List
router.delete("/delete/:id", async (req, res) => {
  const result = await List.findByIdAndDelete({ _id: req.params.id });

  res.json(result);
});

module.exports = router;
