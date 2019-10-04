


var pics=[
     "imgs/annasha1.jpeg",
   "imgs/annasha2.jpeg",
   "imgs/annasha3.jpeg",
   "imgs/annasha4.jpeg",
   "imgs/annasha5.jpeg",
    "imgs/annasha6.jpeg"


];

var btn = document.querySelector("button")
var img = document.querySelector("img")
var counter = 1

btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0
	}
	img.src = pics[counter]
	counter = counter + 1
	
});





