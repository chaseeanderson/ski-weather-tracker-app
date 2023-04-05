const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  conditions: { type: String, required: true },
  temperature: { type: Number, required: true },
  snowDepth: { type: Number, required: true },
});

module.exports = mongoose.model('Resort', resortSchema);