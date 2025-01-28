// Your code here.
 const item=document.getElementsByClassName("item");
for(let i=0;i<item.length;i++){
	item[i].setAttribute("draggable","true");
	item[i].addEventListener('drag',(e)=>{
	console.log("dragging");
})
}
console.log(item);