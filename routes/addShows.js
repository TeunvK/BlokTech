const express = require('express');
const router = express.Router();
const controller = require('../controllers/addShows');

router.get('/:userId', controller.searchShow);
router.post('/:userId', controller.addShows);


module.exports = router;
