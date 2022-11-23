const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const Vertical = document.querySelector('.Vertical')

mouseEvent.addEventListener('mousemove',function(e){
	horizontal.innerHTML = e.x;
	Vertical.innerHTML = e.y;
	mouseEvent.style.left = e.x / window.innerwidth * 100 + "%";

	if (e.x > 500){
		document.body.style.filter = "blur(3px)";

	}
	else{
		document.body.style.filter = "none";
	}
})
document.getElementById('input').addEventListener('input',function(e){
	Vertical.innerHTML = e.target.value
})
