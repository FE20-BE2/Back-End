const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user-routes')
const app = express();
const port = process.env.PORT || 3000;

// Route utama
app.get('/', (req, res) => {
  res.send('Holaaa, Selamat datang!');
});

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//router
app.use('/api/users', userRoutes);

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
