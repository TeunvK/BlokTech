const { user } = require('../models');


const searchShow = async (req, res) => {
	res.render('addShows', {
	});
};


const addShows = async (req, res) => {
	const showIds = req.body.showId;
	const addToMatches = await user.findOneAndUpdate({name: req.params.userId}, {
		$addToSet: {
			favShows: showIds
		}}).lean().exec();

	res.redirect(`../home/${req.params.userId}`);
};


module.exports = {
	addShows: addShows,
	searchShow: searchShow,
};