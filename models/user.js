var mongoose = require("mongoose")
var Schema = mongoose.Schema

var schema = new Schema({
  login: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("user", schema)
