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
	
	const unmatchPerson = await user.findOne({name: req.body.unmatch});
	const appUser = await user.findOneAndUpdate({name: req.params.userId}, {
		$pull: {
			matches: unmatchPerson.id
		}}).lean().exec();
//$pull will remove from an existing (specified) array
	res.redirect(`../../home/${req.params.userId}`);
};

module.exports = {
	home: home,
	unmatchUser: unmatchUser,
};
