// create web server
const express = require('express');
const app = express();

// import data
const comments = require('./data/comments');

// Set view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('home', { comments });
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  res.render('comments', { comment });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running');
});