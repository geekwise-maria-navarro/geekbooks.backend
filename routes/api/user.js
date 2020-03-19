const express = require('express')
const router = express.Router()

// Item Model
const User = require('../../models/User');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', (req, res) => {
  const newItem = new User({
    name: req.body.name
  });

  newItem.save().then(user => res.json(user));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;