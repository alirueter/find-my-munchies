var foodInput = document.getElementById("food-input").value;
var foodSearchBtn = document.querySelector("#food-btn");
var drinkInput = document.getElementById("drink-input").value;
var drinkSearchBtn = document.querySelector(".drink-search");


//Details of search
var foodLocation = document.querySelector(".location-food")
var cuisine = document.querySelector(".cuisine")
var meal = document.querySelector(".meal")
var drinkLocation = document.querySelector(".location-drink")
var beerType = document.querySelector(".beer-type")
var beer = document.querySelector(".beer")

$(foodSearchBtn).click(function(){
    if (foodInput === ""){
    $(".error1").append("Field cannot be blank.")
    else {
        //API STUFF
    }
}
});

$(drinkSearchBtn).click(function(){
    if (drinkInput === ""){
    $(".error2").append("Field cannot be blank.")
    else {
        //API STUFF
    }
}
});