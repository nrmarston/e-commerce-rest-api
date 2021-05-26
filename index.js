const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db/index.js');
const PORT = 4000;

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/apples', (req, res) => {
  res.status(200).json({ fruitType: 'Apple', icon: '🍎' });
});

app.get('/oranges', (req, res) => {
  res.status(200).json({ fruitType: 'Orange', icon: '🍊' });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

app.listen(PORT, console.log(`The server is running on port ${PORT}`));
