const { user, tvshow } = require('../models')




const matches =  async (req, res) => {
userName = req.params.userId
console.log(userName)
userMatch = req.body.goodMatch
console.log(userMatch)

user.find({name: userName}).lean().exec(function(error, owner) {
    const ownerId = owner;
    owner.forEach(function(match) {
        const matchList = match.matches;
        user.find({name: userMatch}).lean().exec(function(error, UID) {
            UID.forEach(function(record) {
            console.log(record._id +" User you have a match with");
            const matchId = record._id

            console.log(match._id)

            if(matchList.includes(matchId)){
                console.log("zit er al in!")
            }   else    {
                user.findByIdAndUpdate(match._id,
                    { "$push": { "matches": matchId } },
                    { "new": true, "upsert": true },
                    function (err, logMatches) {
                        if (err) throw err;
                        console.log(logMatches);
                    }
                );
                console.log("zou successvol moeten zijn")
            }
            
  
            });
        });

        const matchedUser = match.matches
        console.log(matchedUser+" matched name")

        res.render("matchList", {
            matchedUser: matchedUser,
        })
        });
    });
}


module.exports = {
	matches: matches,
};
