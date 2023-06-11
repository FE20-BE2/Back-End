const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const userRoutes = require('./routes/login-register-router')
const publicRoutes = require('./routes/public/public')
const adminRoutes = require('./routes/admin/admin')
const kelasOnlineRoutes = require('./routes/kelas-online-routes')
const kelasOfflineRoutes = require('./routes/kelas-offline-routes')
const publicKelasRoutes = require('./routes/admin-kelas-routes')

require('dotenv').config();

const app = express();

connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// routes
app.use('/api/users', userRoutes);
app.use(publicRoutes)
app.use(adminRoutes)
app.use('/api/user/kelas', kelasOnlineRoutes);
app.use('/api/user/kelas', kelasOfflineRoutes);
app.use('/api/admin/kelas', publicKelasRoutes);


app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(process.env.PORT || 3030, "0.0.0.0", () => {
  console.log('Server berjalan pada port 3030');
});
