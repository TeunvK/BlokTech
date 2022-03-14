const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const page = {
		title: "Not Found"
	};
	res.status(404).render('404', { page: page });
});


module.exports = router;