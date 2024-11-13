const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  name: {
    type: String,
    reqired: true,
  },
});

module.exports = ObjectSchema;
