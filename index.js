const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 3000;

// Route utama
app.get('/', (req, res) => {
  res.send('Holaaa, Selamat datang!');
});

connectDB();

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
