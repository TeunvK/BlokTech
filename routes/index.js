const express = require('express');
const router = express.Router();

const home  = require('./home');
const login  = require('./login');
const match  = require('./match');
const error  = require('./404');

router.use('/', home);
router.use('/login', login);
router.use('/match', match);
router.use('*', error);

module.exports = router;