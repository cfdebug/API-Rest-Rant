const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String},
  cuisines: { type: String, required: true },
  city: { type: String},
  state: { type: String},
  founded: {type: String}
})

module.exports = mongoose.model('Place', placeSchema)