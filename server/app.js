const express = require('express');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/pet-store')
  .then(() => console.log('Mongoose connected'))
  .catch(err => console.log('Error connecting to mongodb'));
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
