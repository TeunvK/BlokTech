const { user } = require('../models');

const match = async (req, res) => {
	user.count().exec(function (err, count) {

		// Get a random entry
		const random = Math.floor(Math.random() * count);
		// Again query all users but only fetch one offset by our random #
		user.findOne().skip(random).exec(
			function (err, result) {
				const name = result.name;
				const age = result.age;
				const about = result.about;
				// Prevent users matching with theirselves
				if(result.name == req.params.userId){
					res.redirect(`../match/${req.params.userId}`);
				} else {
					res.render('match', {
						userName: req.params.userId,
						name: name,
						age: age,
						about: about,
						shows: result.favShows
					});
				}
			});
	});
};

module.exports = {
	match: match,
};
