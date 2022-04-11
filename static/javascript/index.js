//index.js

let deleteBtn = Array.from(document.getElementsByClassName('deleteBtn'));
let closeBtn = Array.from(document.getElementsByClassName('closePopup'));
let closePopup = Array.from(document.getElementsByClassName('confirmUnmatch'));

deleteBtn.forEach(e => {
	e.addEventListener('click', function(){
		console.log(this.id);
		const removePopup = document.getElementById('unmatch'+this.id);
		removePopup.style.display= 'block';
	});
});

closeBtn.forEach(e => {
	e.addEventListener('click', function(){
		console.log(this);
		closePopup.forEach(c => {
			c.style.display= 'none';
		});
	});
});
