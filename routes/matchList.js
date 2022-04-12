const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchList');


router.get('/:userId', controller.matches);
router.post('/:userId', controller.matches);


module.exports = router;
