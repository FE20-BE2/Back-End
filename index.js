const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const userRoutes = require('./routes/user/user')
const publicRoutes = require('./routes/public/public')
const adminRoutes = require('./routes/admin/admin')
const kelasOnlineRoutes = require('./routes/user/kelas-online-routes')
const kelasOfflineRoutes = require('./routes/user/kelas-offline-routes')
const adminOfflineRoutes = require('./routes/admin/admin-kelas-offline-routes')
const adminOnlineRoutes = require('./routes/admin/admin-kelas-online-routes')
const mentorRouter = require('./routes/admin/mentor-kelas-routers')
const paymentRouter = require('./routes/user/payment-kelas-routes')

require('dotenv').config();

const app = express();

connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// routes
app.use(mentorRouter);
app.use(publicRoutes)
app.use(adminRoutes)
app.use(userRoutes)
app.use(kelasOnlineRoutes);
app.use(kelasOfflineRoutes);
app.use(adminOfflineRoutes);
app.use(adminOnlineRoutes);
app.use(paymentRouter);

app.listen(process.env.PORT || 3030, "0.0.0.0", () => {
  console.log('Server berjalan pada port 3030');
});
