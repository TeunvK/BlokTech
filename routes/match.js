const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const controller = require("../controllers/match");




router.get('/', controller.match);


module.exports = router;
