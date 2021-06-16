let body = document.querySelector(".container")
let toggle = document.getElementById("toggle")

toggle.addEventListener('click', e => {
	if(toggle.checked) {
		body.classList.add('dark')
	} else {
		body.classList.remove('dark')
	}
});
