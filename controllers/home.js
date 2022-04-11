const { user } = require('../models');


const home = async (req, res) => {
	const appUser = await user.findOne({name: req.params.userId});
	let person = appUser.name;

	const matchList = await user.findOne({name: person}).populate('matches').lean();

	res.render('home', {
		person: person,
		favShows: matchList.favShows,
		matches: matchList.matches,
	});
};



const unmatchUser = async (req, res) => {
	console.log(user.findOne({name: req.params.userId}));
	res.redirect('home');
};

module.exports = {
	home: home,
	unmatchUser: unmatchUser,
};
