const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  id: String,
  title: String,
  text: String,
  date: String,
  image: String,
});

module.exports = mongoose.model('News', newsSchema);
