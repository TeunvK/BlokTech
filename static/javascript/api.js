
let formContainer = document.querySelector('#showResultsForm');
let showList = document.querySelector('#showResultList');


async function getTvShows(query){
	try{
		//fetch api and turn it into json
		const res = await fetch(`https://www.episodate.com/api/search?q=${query}`);
		const data = await res.json();
		const result = await data.tv_shows.map(test => test);
		generateShowList(result);
	} catch (err) {
		console.error('Fetch error:', err);
	}
}	



//use the results from the fetch in this function and add HTML based on all the results
function generateShowList(result){
	showList.innerHTML = '';
	result.forEach(result => {
		const element = document.createElement('li');
	
		const inputType = document.createElement('input');
		inputType.setAttribute('type', 'checkbox');
		inputType.setAttribute('id', result.permalink);
		inputType.setAttribute('class', 'img-checkbox');
		inputType.setAttribute('value', result.id);
		inputType.setAttribute('name', 'showId');

		const labelContainer = document.createElement('label');
		labelContainer.setAttribute('for', result.permalink);

		const imgThumbnail = document.createElement('img');
		imgThumbnail.setAttribute('src', result.image_thumbnail_path);

		showList.appendChild(element);

		element.appendChild(inputType);
		element.appendChild(labelContainer);

		labelContainer.appendChild(imgThumbnail);
	});
}

//set searchTimeout to 0, to prevent spamming fetch requests
let searchTimeout = 0;

window.onload = () => {
	const searchTerm = document.getElementById('tvShow');
	searchTerm.onkeyup = () => {   //check for keyup event

		clearTimeout(searchTimeout);
		if(searchTerm.value.trim().length === 0){   //if searchbar is empty, don't request for data
			formContainer.innerHTML = '';
			return;
		}

		searchTimeout = setTimeout(() => { // timeout of 0.5 seconds to prevent spamming fetch requests, the function will get called when .5 seconds of no keyup event
			getTvShows(searchTerm.value);
		}, 500);
	};
};