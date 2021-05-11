const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /lists",
  });
});

router.post("/", (req, res, next) => {
  const list = {
    text: req.body.text,
  };
  res.status(201).json({
    message: "Handling POST requests to /lists",
    createdList: list,
  });
});

router.get("/:listId", (req, res, next) => {
  const id = req.params.listId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special id",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You passed an ID",
    });
  }
});

router.patch("/:listId", (req, res, next) => {
  res.status(200).json({
    message: "Updated list",
  });
});

router.delete("/:listId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted list",
  });
});
module.exports = router;
