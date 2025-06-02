const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
require('dotenv').config();
PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  console.log("Register request:", email, password);
  res.status(201).json({ message: 'User registered!' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));


