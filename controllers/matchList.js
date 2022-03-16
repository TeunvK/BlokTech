const { user, tvshow } = require('../models')




const matches =  async (req, res) => {
userName = req.params.userId
console.log(userName)
userMatch = req.body.goodMatch
console.log(userMatch)

user.find({name: userName}).lean().exec(function(error, UID) {
        UID.forEach(function(record) {
        console.log(record._id+" App user");
      });
    });

user.find({name: userMatch}).lean().exec(function(error, UID) {
    UID.forEach(function(record) {
    console.log(record._id +" User you have a match with");
    });
});





res.render("matchList")

}


module.exports = {
	matches: matches,
};
