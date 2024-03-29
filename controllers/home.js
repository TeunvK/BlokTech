const { user } = require('../models');


const home = async (req, res) => {
	const appUser = await user.findOne({name: req.params.userId});
	let person = appUser.name;

	const matchList = await user.findOne({name: person}).populate('matches').lean();
	res.render('home', {
		person: person,
		about: appUser.about,
		favShows: matchList.favShows,
		matches: matchList.matches,
	});
};


const unmatchUser = async (req, res) => {
	
	const unmatchPerson = await user.findOne({name: req.body.unmatch});
	await user.findOneAndUpdate({name: req.params.userId}, {
		$pull: {
			matches: unmatchPerson.id
		}}).lean().exec();
	//$pull will remove a (specified) value from an existing (specified) array
	res.redirect(`../../home/${req.params.userId}`);
};

module.exports = {
	home: home,
	unmatchUser: unmatchUser,
};
