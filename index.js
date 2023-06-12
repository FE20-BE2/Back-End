const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const userRoutes = require('./routes/login-register-router')
const publicRoutes = require('./routes/public/public')
const adminRoutes = require('./routes/admin/admin')
const kelasOnlineRoutes = require('./routes/kelas-online-routes')
const kelasOfflineRoutes = require('./routes/kelas-offline-routes')
const adminOfflineRoutes = require('./routes/admin-kelas-offline-routes')
const adminOnlineRoutes = require('./routes/admin-kelas-online-routes')
const mentorRouter = require('./routes/mentor-kelas-routes')

require('dotenv').config();

const app = express();

connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// routes
app.use('/api/users', userRoutes);
app.use('/api/mentor', mentorRouter);
app.use(publicRoutes)
app.use(adminRoutes)
app.use('/api/user/kelas/online', kelasOnlineRoutes);
app.use('/api/user/kelas/ofline', kelasOfflineRoutes);
app.use('/api/admin/kelas/v1', adminOfflineRoutes);
app.use('/api/admin/kelas/v2', adminOnlineRoutes);


app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(process.env.PORT || 3030, "0.0.0.0", () => {
  console.log('Server berjalan pada port 3030');
});
