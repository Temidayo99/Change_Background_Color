const btnColor = document.querySelector(".btn_color");
const bodyBg = document.querySelector("body");

const colors = ["red","blue","green","pink","gray","#355998"];

btnColor.addEventListener("click",changeColor);

function changeColor(){
	//bodyBg.style.backgroundColor = "orange";
	let random = Math.floor(Math.random() * colors.length);
	bodyBg.style.backgroundColor = colors[random];
	console.log(colors[random]);
}