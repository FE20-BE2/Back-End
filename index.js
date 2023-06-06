const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user-routes')


require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(3030, () => {
  console.log('Server berjalan pada port 3000');
});
