const { user } = require('../models');


const searchShow = async (req, res) => {
    res.render('addShows', {
	});
}

module.exports = {
    searchShow: searchShow,
}