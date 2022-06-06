const express = require('express');
const root = require('../util/root');
const users = express.Router();
const DashboardController = require('../Scripts/DashboardController');

users.get('/Dashboard',DashboardController.getDashboard);

module.exports = users;