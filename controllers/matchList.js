const {	user } = require('../models');


const matches = async (req, res) => {

	const matchedPerson = await user.find({name: req.body.goodMatch});
	await user.findOneAndUpdate({name: req.params.userId}, {
		$addToSet: {
			matches: matchedPerson
		}}).lean().exec();
	//$addToSet will add the matched person's ObjectID to the "matches" list of the app User if it does not already exist in there.

	res.redirect(`../home/${req.params.userId}`);
};


module.exports = {
	matches: matches,
};