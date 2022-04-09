console.log("test");

async function getTvShows(query){
	const res = await fetch(`https://www.episodate.com/api/search?q=${query}`);
	const data = await res.json();
	const result = await data.map(test => test.name);
	console.log(result)
}




window.onload = (data) => {
	const searchTerm = document.getElementById("tvShow");
	searchTerm.onkeyup = (event) => {
		getTvShows(searchTerm.value);
	}
	console.log(data)
}
