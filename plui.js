const body = document.body;

setInterval(pluie,10);



function pluie() {
	const waterDrop = document.createElement('i');
	waterDrop.classList.add('fas');
	waterDrop.classList.add('fa-tint')
	waterDrop.style.fontSize = Math.random()*7+'px';
	waterDrop.style.animationDuration = Math.random()*2+'s';
	body.appendChild(waterDrop);

}