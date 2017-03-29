document.addEventListener("DOMContentLoaded", function() {

// slider

var next = document.querySelector(".arrow-right span");
var back = document.querySelector(".arrow-left span");
var images = document.querySelector(".image__list").children;
var index = 0;
// console.log(back, next, images);

images[index].classList.toggle("showIt");

    next.addEventListener("click", function () {
        images[index].classList.toggle("showIt");
        index += 1;
        if (index >= images.length){
            index = 0;
        }
        images[index].classList.toggle("showIt");
    });
    back.addEventListener("click", function () {
        images[index].classList.toggle("showIt");
        index -= 1;
        if (index < 0){
            index = images.length-1;
        }
        images[index].classList.toggle("showIt");
    });



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
