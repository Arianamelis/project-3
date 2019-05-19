const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    genre: { type: String, required: true },
  artist: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  //user: {}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;