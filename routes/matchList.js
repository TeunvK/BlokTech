const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const controller = require("../controllers/matchList");


router.get('/:userId', controller.matches);
router.post('/:userId', controller.matches);


module.exports = router;
