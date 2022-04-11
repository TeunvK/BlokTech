const express = require('express');
const router = express.Router();
const controller = require('../controllers/home');

router.get('/:userId', controller.home);
// router.get('/unmatchUser/:userId', controller.redirectHome);
router.post('/unmatchUser/:userId', controller.unmatchUser);
// router.put('/unmatchUser/:userId', controller.unmatchUser);


module.exports = router;
