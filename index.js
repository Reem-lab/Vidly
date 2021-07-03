const Joi = require('joi');
const genres = require('./router/genres');
const users = require('./router/users');
const express = require('express');
const mongoose =require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
