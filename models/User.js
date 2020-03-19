const mongoose = require('mongoose');
const Model = mongoose.Schema;

// Create Schema
const UserSchema = new Model({
  name: {
    type: String,
    required: true
  }
});  

module.exports = User = mongoose.model('user', UserSchema);