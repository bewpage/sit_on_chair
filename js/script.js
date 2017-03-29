document.addEventListener("DOMContentLoaded", function() {

// submenu






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
