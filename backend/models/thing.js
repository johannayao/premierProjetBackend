const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  nomAuteur: { type: String, required: true },
  images: { type: String, required: true },
  userId: { type: String, required: false },
  Prix: { type: Number, required: true },

});
// const Thing = mongoose.model('Thing', thingSchema)
// module.exports = Thing;
module.exports = mongoose.model('Thing', thingSchema);