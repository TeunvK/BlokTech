//index.js

let deleteBtn = Array.from(document.getElementsByClassName('deleteBtn'));
let closeBtn = Array.from(document.getElementsByClassName('closePopup'));
const removePopup = document.querySelector('.confirmUnmatch');


deleteBtn.forEach(e => {
	e.addEventListener('click', function(){
		removePopup.style.display= 'block';
	});
});

closeBtn.forEach(e => {
	e.addEventListener('click', function(){
		removePopup.style.display= 'none';
		deleteBtn.forEach(event => {
			event.checked = false;
		});
	});
});