const btn = document.querySelector("#btn")
const img = document.getElementById('img')

btn.addEventListener('click',function(){
	img.classList.toggle('show')
})

//******************************************

const theme = document.querySelectorAll('.theme');
theme.forEach(function(item){
	item.addEventListener('click',function(e){
		console.log(e.target.id);
		switch(e.target.id){
	      case"dark":
			document.body.classList.add("darkTheme");
			break;
          case"salmon":
          	document.body.classList.add("salmonTheme");
          	break;
          case"yellow":
          	document.body.classList.add("yellowTheme")
          	break;
          default:
          	null;
		}
	})
})
