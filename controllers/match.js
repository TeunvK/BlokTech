const { user, tvshow } = require('../models')

const match = async (req, res) => {
	console.log(req.params.userId+"match");
	user.count().exec(function (err, count) {

		// Get a random entry
		const random = Math.floor(Math.random() * count)
		// Again query all users but only fetch one offset by our random #
		user.findOne().skip(random).exec(
		function (err, result) {
			const name = result.name;
			const age = result.age;
			const about = result.about;

			res.render("match", {
				userName: req.params.userId,
				name: name,
				age: age,
				about: about,
				shows: [{
					name: "Falling skies",
					image: "tbt"
				},
				{
					name: "Game of Thrones",
					image: "tbt"
				},
				{
					name: "Deadly class",
					image: "tbt"
				}
				]
			});

			console.log(result.name+" is the result") 
			console.log(user)

		})
	})
	
    
	console.log("match triggered")
	// Get the count of all users

	// tvshow.findOne({}, function (err, test){
	// 	console.log(test)
	// })

	
};


const getMatch = (req, res) => {

}


module.exports = {
	match: match,
	getMatch: getMatch
};
