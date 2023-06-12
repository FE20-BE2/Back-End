const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const publicRoutes = require('./routes/public/public')
const adminRoutes = require('./routes/admin/admin')
const kelasRoutes = require('./routes/kelas-routes')
const publicKelasRoutes = require('./routes/admin-kelas-routes')
const userRoutes = require('./routes/user/user') 

require('dotenv').config();

const app = express();

connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// routes
app.use(publicRoutes)
app.use(adminRoutes)
app.use(userRoutes)
app.use('/api/user/kelas', kelasRoutes);
app.use('/api/admin/kelas', publicKelasRoutes);

app.listen(3030, () => {
  console.log('Server berjalan pada port 3030');
});
