var mongoose = require("mongoose")
var Schema = mongoose.Schema

var schema = new Schema({
  body: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("makethem", schema)
