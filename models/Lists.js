const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: String,
 
});

module.exports = mongoose.model("List", ListSchema);
