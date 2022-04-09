console.log("test "+req.query);


async function getTvShows(){

	const res = await fetch("https://www.episodate.com/api/show-details?q=:");
	console.log(res);
}

getTvShows();