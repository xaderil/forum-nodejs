var mongoose = require("mongoose")
var Schema = mongoose.Schema


var post = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
    default: "Аноним"
  }
})

module.exports = post
