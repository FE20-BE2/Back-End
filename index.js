const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const userRoutes = require('./routes/login-register-router')
const publicRoutes = require('./routes/public/public')
const adminRoutes = require('./routes/admin/admin')
const kelasOnlineRoutes = require('./routes/kelas-online-routes')
const adminOfflineRoutes = require('./routes/admin-kelas-offline-routes')
const adminOnlineRoutes = require('./routes/admin-kelas-online-routes')

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
app.use('/api/user/kelas/online', kelasOnlineRoutes);
app.use('/api/admin/kelas/offline', adminOfflineRoutes);
app.use('/api/admin/kelas/online', adminOnlineRoutes);


app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(process.env.PORT || 3030, "0.0.0.0", () => {
  console.log('Server berjalan pada port 3030');
});
