const { user } = require('../models');

const login = (req, res) => {
	console.log("testlog")
	console.log(user.db.name); // myDatabase
	user.find().lean().then(users => {

		console.log(users);
	
	
		res.render('login', {
		  users:users,
		});
	  })
};

const loggedIn = async (req, res) => {
	try{
		res.redirect('home')
	} catch {
		
	}
			
};


module.exports = {
	login: login,
    loggedIn: loggedIn
};