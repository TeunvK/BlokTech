const { user, tvshow } = require("../models");




const matches =  async (req, res) => {
	// userName = req.params.userId;
	// console.log(userName);
	// userMatch = req.body.goodMatch;
	// console.log(userMatch);

	
	// user.find({name: userName}).lean().exec(function(error, owner) {
	// 	const ownerId = owner;
	// 	owner.forEach(function(match) {
	// 		const matchList = match.matches;
	// 		user.find({name: userMatch}).lean().exec(function(error, UID) {
	// 			UID.forEach(function(record) {
	// 				console.log(record._id +" User you have a match with");
	// 				const matchId = record._id;

	// 				console.log(match._id);

	// 				if(matchList.includes(matchId)){
	// 					console.log("zit er al in!");
	// 				}   else    {
	// 					user.findByIdAndUpdate(match._id,
	// 						{ "$push": { "matches": matchId } },
	// 						{ "new": true, "upsert": true },
	// 						function (err, logMatches) {
	// 							if (err) throw err;
	// 							console.log(logMatches);
	// 						}
	// 					);
	// 					console.log("zou successvol moeten zijn");
	// 				} 
	// 			});
	// 		});

	// 		const matchedUser = match.matches;
	// 		console.log(matchedUser+" matched name");


	//         //render with list of matches
	// 		res.render("matchList", {
	// 			matchedUser: matchedUser,
	// 		});
	// 	});
	// });
	try{
		// const appUser = await user.find({name: req.params.userId}).lean().exec();
		 const testtest = await user.distinct("matches", {name: req.params.userId});
		// 	const matchedPerson = await user.find({name: req.body.goodMatch}).lean().exec(function(error, user) {
		// 		user.forEach(function(userObject) {
				
		// 			console.log(testtest+"abc")
		// 			console.log(userObject._id.toString()+"  testing stuff")
		// 			if(testtest.includes(userObject._id.toString())){
		// 				console.log("already included");
		// 			} else {
		// 				console.log("not included!");
		// 			}
		// 	});
		// });


    //     console.log(testtest)
	       const appUser = await user.find({name: req.params.userId})
          const matchedPerson = await user.find({name: req.body.goodMatch})
          console.log(matchedPerson)

        //   user.findOneAndUpdate({name: req.params.userId}, {$push: {matches: matchedPerson}}).lean().exec();
        
    // //     user.find({matchedPerson: { $in:  appUser}}), function(err, docs){
    // //         console.log(docs);
    // //    };

    //     console.log(req.body.goodMatch)
        const isIncluded = user.find({name: req.body.goodMatch}).exec(function(error, checkUser) {
            checkUser.forEach(function(userObject) {
                const UID = userObject._id
                console.log(UID)
                if(testtest.toString().includes(userObject._id.toString())){
                    				console.log("already included");
                    			} else {
                                    // matchedPerson.push({matches: matchedPerson});
                                    console.log(appUser)
                    				console.log("not included!");
                    			}
            });
        });;

        // if(appUser.includes(matchedPerson)){
        //     				console.log("already included");
        //     			} else {
        //     				console.log("not included!");
        //     			}
		// const matchedPerson = await user.find({name: req.body.goodMatch}).lean().exec(function(error, user) {
		// 	user.forEach(function(userObject) {
		// 		const UID = userObject._id;
			
				

		// 	});
		// });

		// const appUser = await user.find({name: req.params.userId});
		// console.log(testtest);

		// const appUser = await user.findOneAndUpdate({name: req.params.userId}, {$push: {matches: matchedPerson}}).lean().exec();
		// console.log(matchedPerson)

		// const matchLijstje = appUser.forEach(function(test) {
		// 	console.log(test.matches);

	
		// });

		

	} catch(err) {
		console.error(err);
	}
		

	res.render("matchList");
};


module.exports = {
	matches: matches,
};
