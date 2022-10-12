const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String},
  cuisines: { type: String, required: true },
  city: { type: String},
  state: { type: String},
  founded: {type: Number,
    min:[1673, 'Surely not that old?!'],
    max:[new Date().getFullYear(), 'Hey, this year is in the future!']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)