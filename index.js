const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('public'));

app.get('/apples', (req, res) => {
  res.status(200).json({ fruitType: 'Apple', icon: '🍎' });
});

app.get('/oranges', (req, res) => {
  res.status(200).json({ fruitType: 'Orange', icon: '🍊' });
});

app.listen(PORT, console.log(`The server is running on port ${PORT}`));
