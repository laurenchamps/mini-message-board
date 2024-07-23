const express = require('express');
// const indexController = require('../controllers/indexController');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello world!',
    user: 'Rasha',
    added: new Date(),
  },
];

// GET homepage
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini message board', messages: messages });
});

// GET form
router.get('/new', (req, res) => {
  res.render('form', { title: 'New message ' });
});

// POST form
router.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect('/');
});

// GET request for one message
router.get('/message/:id', (req, res) => {
  res.render('message', {
    title: `Message ${req.params.id}`,
    message: messages[req.params.id],
  });
});

module.exports = router;
