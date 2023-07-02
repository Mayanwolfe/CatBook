require('dotenv').config();
const express = require('express');
//const path = require('path');
const app = express();
const connectDB = require('./config/connectDB')
const catRoutes = require('./routes/catRoutes');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', catRoutes);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})