const express = require('express');
const router = express.Router();
const controller = require("../controllers/home");

router.get('/:userId', controller.home);


module.exports = router;
