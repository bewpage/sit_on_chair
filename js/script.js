document.addEventListener("DOMContentLoaded", function() {

// slider

var next = document.querySelector(".arrow-right");
var back = document.querySelector(".arrows-left");
var lists = document.querySelector(".sliderList").children;
var index = 0;
console.log(buttonPrev, buttonNext, lists)




// text stripe off-on

var textShadow = document.querySelectorAll(".boxshadow");
for ( var i = 0; i < textShadow.length; i++){
    textShadow[i].addEventListener("mouseover", function () {
        this.firstElementChild.style.display = "none";
    });

    textShadow[i].addEventListener("mouseout", function () {
        this.firstElementChild.style.display = "block";
    });
}




})
