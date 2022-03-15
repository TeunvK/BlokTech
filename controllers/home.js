const user = require('../models');

const home = (req, res) => {
	const userName = req.body.name;
	const userAge = req.body.age;
	console.log(userName, userAge, "loggedIn");
	res.render('home', { 
		name: userName,
		age: userAge
	});
};


module.exports = {
	home: home
};
