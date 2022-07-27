const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  desc : {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Contact', contactSchema)