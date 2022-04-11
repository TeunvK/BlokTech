const express = require('express');
const router = express.Router();
const controller = require('../controllers/home');

router.get('/:userId', controller.home);
router.delete('/:userId', controller.unmatchUser);


module.exports = router;
