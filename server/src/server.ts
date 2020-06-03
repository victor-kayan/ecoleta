import express from 'express';

const app = express();

app.get('/api', (request, response) => {
  response.json('Hello, word!');
});

app.listen(3333, () => {
  console.log('Server running on port 3333');
});