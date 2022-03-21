const { user } = require("../models");

const login = (req, res) => {

	res.render("login");
};

const loggedIn = async (req, res) => {
	try{
		const userName = req.body.name;
		const userExists = await user.exists({ name: userName }).select("name").lean();
		if (userExists != null){
			const userId = userName;
			res.redirect(`home/${userId}`);
		} else {
			res.redirect("login");
		}
	} catch (err){
		console.message(err);
		throw err;
	}
};


module.exports = {
	login: login,
	loggedIn: loggedIn
};