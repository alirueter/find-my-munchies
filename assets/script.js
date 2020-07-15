var foodInput = document.querySelector(".food-input")
var foodSearchBtn = document.querySelector(".food-search")
var drinkInput = document.querySelector(".drink-input")
var drinkSearchBtn = document.querySelector(".drink-search")

//Details of search
var foodLocation = document.querySelector(".location-food")
var cuisine = document.querySelector(".cuisine")
var meal = document.querySelector(".meal")
var drinkLocation = document.querySelector(".location-drink")
var beerType = document.querySelector(".beer-type")
var beer = document.querySelector(".beer")

foodSearchBtn.on("click", function() {
    if (foodInput.val() === "") {
        $(".modal").modal();
    }
})