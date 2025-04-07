const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'fitness')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'fitness', 'html', 'home.html'));
});

app.get('/', (req, res) => {
  res.redirect('/fitness/html/index.html');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
