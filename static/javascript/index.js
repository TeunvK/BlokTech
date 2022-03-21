console.log("test");

async function getTvShows(){
	const res = await fetch("https://www.episodate.com/api/show-details");
	console.log(res);
}

getTvShows();