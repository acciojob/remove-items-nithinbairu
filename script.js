//your JS code here. If required.

document.getElementById("button").addEventListener("click",function() {
	let selectedColor=document.getElementById("colorSelect");
	selectedColor.remove(selectedColor.selectedIndex);
})