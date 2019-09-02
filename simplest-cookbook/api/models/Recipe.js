// Recipe.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Recipe
let Recipe = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'recipe'
});

module.exports = mongoose.model('Recipe', Recipe);