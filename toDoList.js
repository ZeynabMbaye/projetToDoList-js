let input = document.getElementById('.entrerList');
let addBtn = document.getElementById('.add-list');
let tasks = document.getElementById('.tasks');

addBtn.addEventListener('click',function(){
	let newItem = document.createElement('div');
	newItem.classList.add('.item-btn i');
	newItem.innerText = input.value;
	input.appendChild(newItem);
	input.value = "";
	newItem.add.addEventListener('click',function(){
		newItem.style.textDecoration = "line-through"
	})
		
})