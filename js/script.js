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


//calculator
var dropArrow = document.querySelectorAll(".list_arrow");
var itemList = document.querySelectorAll(".list_panel");
var priceColumn = document.querySelector(".panel_right").children;
var typeChair = document.querySelector(".panel_left").children;
var checkBox = document.querySelector(".check-box label");
var liElement = document.querySelectorAll(".form li");
var sum = document.querySelector(".sum strong");

var choose = dropArrow[0].nextElementSibling;

dropArrow[0].addEventListener("click", function (event) {
    event.preventDefault();
    var choose = this.nextElementSibling;
    choose.classList.toggle("display");
    var pickElement = choose.children;
    console.log(pickElement);

    for (var i = 0; i < pickElement.length; i++) {

        pickElement[i].addEventListener("click", function (event){

            var text = this.innerText;
            typeChair[i].innerText = text;
            var price = this.dataset.price;
            priceColumn[i].innerText = Number(price);
            result = Number(priceColumn[i].innerText);
            sum.innerText = result;
            choose.classList.toggle("display");
            result = 0;
        });
    }

});

dropArrow[1].addEventListener("click", function (event) {
    event.preventDefault();
    var choose = this.nextElementSibling;
    choose.classList.toggle("display");
    var pickElement = choose.children;
    console.log(pickElement);

    for (var i = 0; i < pickElement.length; i++) {

        pickElement[i].addEventListener("click", function (event){

            var text = this.innerText;
            typeChair[1].innerText = text;
            var price = this.dataset.price;
            priceColumn[1].innerText = Number(price);
            result = Number(priceColumn[1].innerText);
            sum.innerText = result + Number(sum.innerText);
            choose.classList.toggle("display");
        });
    }
});

dropArrow[2].addEventListener("click", function (event) {
    event.preventDefault();
    var choose = this.nextElementSibling;
    choose.classList.toggle("display");
    var pickElement = choose.children;
    console.log(pickElement);

    for (var i = 0; i < pickElement.length; i++) {

        pickElement[i].addEventListener("click", function (event){

            var text = this.innerText;
            typeChair[2].innerText = text;
            var price = this.dataset.price;
            priceColumn[2].innerText = Number(price);
            result = Number(priceColumn[2].innerText);
            sum.innerText = result + Number(sum.innerText);
            choose.classList.toggle("display");
        });
    }

});


checkBox.addEventListener("click", function (event){
    console.log(this);
    if (this.previousElementSibling.checked == true) {
        priceColumn[3].innerText = "";
        typeChair[3].innerText = "";
        result = Number(this.previousElementSibling.dataset.price);
        sum.innerText = Number(sum.innerText) - result;
    }else {
        result = Number(this.previousElementSibling.dataset.price);
        priceColumn[3].innerText = result;
        console.log(priceColumn[3]);
        sum.innerText = result + Number(sum.innerText);
        typeChair[3].innerText = "Transport";
    }
});

console.log(priceColumn[0].innerText);


})
