const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("Teams", teamsSchema);
