console.log('test');

let showResults = document.querySelector('#showResultList');

async function getTvShows(query){
	try{
		const res = await fetch(`https://www.episodate.com/api/search?q=${query}`);
		const data = await res.json();
		const result = await data.tv_shows.map(test => test);
		// console.log(result);
		generateShowList(result);
	} catch (err) {
		console.error('Fetch error:', err);
	}
}	
//test.image_thumbnail_path



function generateShowList(result){
	
	// console.log(result)
	showResults.innerHTML = '';
	result.forEach(result => {
		const element = document.createElement('li');

		const formContainer = document.createElement('form');
		formContainer.setAttribute('method', 'post');
	
		const inputType = document.createElement('input');
		inputType.setAttribute('type', 'checkbox');
		inputType.setAttribute('id', result.permalink);
		inputType.setAttribute('class', 'img-checkbox');
		inputType.setAttribute('value', result.id);

		const labelContainer = document.createElement('label');
		labelContainer.setAttribute('for', result.permalink);

		const imgThumbnail = document.createElement('img');
		imgThumbnail.setAttribute('src', result.image_thumbnail_path);


		showResults.appendChild(element);

		element.appendChild(formContainer);

		formContainer.appendChild(inputType);
		formContainer.appendChild(labelContainer);

		labelContainer.appendChild(imgThumbnail);
	});
}




// function generateShowList(result){
	
// 	// console.log(result)
// 	showResults.innerHTML = '';
// 	result.forEach(result => {
// 		const element = document.createElement('li');
// 		element.innerText = result;
// 		showResults.appendChild(element);
// 	});
// }

let searchTimeout = 0;

window.onload = () => {
	const searchTerm = document.getElementById('tvShow');
	searchTerm.onkeyup = (event) => {

		clearTimeout(searchTimeout);
		if(searchTerm.value.trim().length === 0){
			showResults.innerHTML = '';
			return;
		}

		searchTimeout = setTimeout(() => {
			getTvShows(searchTerm.value);
		}, 500);
	};
};


