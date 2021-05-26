const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const messageSchema = mongoose.model("message", Schema);

module.exports = messageSchema;
