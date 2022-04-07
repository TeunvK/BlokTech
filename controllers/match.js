const { user, tvshow } = require("../models");

// async function getTvShows(){
// 	const api = await fetch("https://www.episodate.com/api/show-details");
// 	console.log(api);
// }


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
				console.log(result.favShows);

				res.render("match", {
					userName: req.params.userId,
					name: name,
					age: age,
					about: about,
					shows: result.favShows
				});
			});
	});
};
const getMatch = (req, res) => {
};


module.exports = {
	match: match,
	getMatch: getMatch
};
