const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const filePath = path.join(__dirname, '../data/posts.json');

// Get all posts
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  res.json(data);
});

// Add a new post
router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const newPost = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
  };
  data.push(newPost);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).json(newPost);
});

module.exports = router;
