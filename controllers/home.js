const { user } = require('../models');


const home = async (req, res) => {
	const appUser = await user.findOne({name: req.params.userId});
	let person = appUser.name;
	// let matches = appUser.matches;


	const matchList = await user.findOne({name: person}).populate('matches').lean();
	const matches = matchList.matches;
	// .then(p=>console.log(p.matches))
	// .catch(error=>console.log(error));

	res.render('home', {
		person: person,
		matches: matches,
	});
	// });
};


const matchList = async (req, res) =>{

};

module.exports = {
	home: home
};
