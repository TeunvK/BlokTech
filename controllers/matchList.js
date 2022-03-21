const {
	user,
	tvshow
} = require("../models");
const {
	exists
} = require("../models/user");
const match = require("./match");

const matches = async (req, res) => {

	const appUser = await user.find({name: req.params.userId})
	const matchedPerson = await user.find({name: req.body.goodMatch});
	const addToMatches = await user.findOneAndUpdate({name: req.params.userId}, {
		$addToSet: {
			matches: matchedPerson
		}}).lean().exec();
//$addToSet will add the matched person's ObjectID to the "matches" list of the app User if it does not already exist in there.
		console.log(req.body)

	res.render("matchList", {
		matches: req.params.matches,
	});
};

//todo view matches in list with names (and img)
//todo allow user to remove person from matches



module.exports = {
	matches: matches,
};