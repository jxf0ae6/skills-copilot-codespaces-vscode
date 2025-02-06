//create web server
const express = require('express');
const router = express.Router();

//middleware
const { requireSignin, isAuth } = require('../controllers/auth');
const { userById } = require