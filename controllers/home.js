const user = require('../models');

const home = (req, res) => {
	const userName = req.params.userId;
	console.log(req.params.userId);
	res.render("home",{
		name: userName
	});
};


module.exports = {
	home: home
};
