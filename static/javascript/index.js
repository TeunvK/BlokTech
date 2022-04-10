let formContainer = document.querySelector('#showResultsForm');
// let tvShowResults = document.querySelector('.tvShowResults');
let showList = document.querySelector('#showResultList');
// console.log(document.querySelectorAll('.img-checkbox input[type="checkbox"]'));

async function getTvShows(query){
	try{
		const res = await fetch(`https://www.episodate.com/api/search?q=${query}`);
		const data = await res.json();
		const result = await data.tv_shows.map(test => test);
		generateShowList(result);
	} catch (err) {
		console.error('Fetch error:', err);
	}
}	




function generateShowList(result){
	showList.innerHTML = '';
	result.forEach(result => {
		const element = document.createElement('li');
	
		const inputType = document.createElement('input');
		inputType.setAttribute('type', 'checkbox');
		inputType.setAttribute('id', result.permalink);
		inputType.setAttribute('class', 'img-checkbox');
		inputType.setAttribute('value', result.id);
		inputType.setAttribute('name', 'showId')

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


let searchTimeout = 0;

window.onload = () => {
	const searchTerm = document.getElementById('tvShow');
	searchTerm.onkeyup = (event) => {

		clearTimeout(searchTimeout);
		if(searchTerm.value.trim().length === 0){
			formContainer.innerHTML = '';
			return;
		}

		searchTimeout = setTimeout(() => {
			getTvShows(searchTerm.value);
		}, 500);
	};
};