const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const FRONTENDPORT = process.env.FRONTENDPORT || 3000;

const authRoutes = require('./routes/auth');

app.use(cors({
  origin: `http://localhost:${FRONTENDPORT}`,
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));

app.use('/auth', authRoutes);

module.exports = app;
