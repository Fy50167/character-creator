const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(cwd, 'client/build')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(cwd, 'client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
