import express from 'express';

const app = express();

app.use(express.static('public'));

app.listen(4000, console.log('http://localhost:4000'));

const port = 4000

app.listen