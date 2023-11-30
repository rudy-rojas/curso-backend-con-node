const express = require('express');

const app = express();

const { config } = require('./config/index');


app.get('/', (req, res) => {
  res.send('Hi world!!!')
});

app.get('/json', (req, res) => {
  res.json({ name: 'Rudy' });

});

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
