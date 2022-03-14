const user = require('../models')

const match = (req, res) => {
    res.render("match", {
        name: "Natasja",
        age: "32 years",
        about: "I love to binge series, mainly into post-apocalyptic and sci-fi shows but I can watch everything!",
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
};


module.exports = {
	match: match
};
