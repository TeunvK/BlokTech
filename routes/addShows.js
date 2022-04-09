const express = require('express');
const router = express.Router();
const controller = require("../controllers/addShows");

router.get('/', controller.searchShow);


module.exports = router;
