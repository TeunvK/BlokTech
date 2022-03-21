const {
	user,
	tvshow
} = require("../models");

const matches = async (req, res) => {
	const userName = req.params.userId;
	const userMatch = req.body.goodMatch;


	user.find({
		name: userName
	}).lean().exec(function (error, owner) {
		owner.forEach(function (match) {
			const matchList = match.matches;
			user.find({
				name: userMatch
			}).lean().exec(function (error, UID) {
				UID.forEach(function (record) {
					const matchId = record._id;
					if (matchList.includes(matchId)) {
						console.log("Already matched!");
					} else {
						user.findByIdAndUpdate(match._id, {
							"$push": {
								"matches": matchId
							}
						}, {
							"new": true,
							"upsert": true
						},
						function (err, logMatches) {
							if (err) throw err;
						}
						);
						console.log("Successfull match");
					}
				});
			});
			const matchedUser = match.matches;
			res.render("matchList", {
				matchedUser: matchedUser,
			});
		});
	});
};


module.exports = {
	matches: matches,
};