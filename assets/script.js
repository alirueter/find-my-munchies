var foodInput = document.getElementById("food-input").value;
var foodSearchBtn = document.querySelector("#food-btn");
var drinkInput = document.getElementById("drink-input").value;
var drinkSearchBtn = document.querySelector(".drink-search");
var locationEl = document.querySelector("#location");

//Details of search
var foodLocation = document.querySelector(".location-food")
var cuisine = document.querySelector(".cuisine")
var meal = document.querySelector(".meal")
var breweryNameEl = document.querySelector("#brewery-name")
var drinkLocation = document.querySelector("#location")
var drinkNumber = document.querySelector("#number")
var breweryWebsite = document.querySelector("#website")

$(foodSearchBtn).click(function(){
    // what I added for modal
    $('.modal').modal();
    // above works ^^

    if (foodInput === ""){
    $(".error1").append("Field cannot be blank.")
    //else {
        //API STUFF
    //}
}
});

$(drinkSearchBtn).click(function(){
    if (drinkInput === "") {
    $(".error2").append("Field cannot be blank.");
    } else {
        console.log("Hey!");
    }
});

var restaurantInfo = function() {
    // format url
    var diningApiUrl = "https://developers.zomato.com/api/v2.1/cuisines?city_id=280";
    
    //fetch
    fetch(diningApiUrl);

    // append info
};

var breweriesInfo = function(city) {
    // format url
    var brewApiUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&per_page=50";

    // fetch
    fetch(brewApiUrl)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            // append info or attach info
            var randomBrewery = Math.floor(Math.random() * (data.length - 1));
            breweryNameEl.innerHTML = data[randomBrewery].name;
            drinkLocation.innerHTML = data[randomBrewery].street + "   " + data[0].city + ", " + data[0].state;
            drinkNumber.innerHTML = data[randomBrewery].phone;
            breweryWebsite.innerHTML = data[randomBrewery].website_url.link(data[randomBrewery].website_url);
            if (data[randomBrewery].phone === "") {
                drinkNumber.innerHTML = "<span class='font-bold'> N/A </span>";
            }

            if (data[randomBrewery].website_url === "") {
                breweryWebsite.innerHTML = "<span class='font-bold'> N/A </span>";
            }
        });
};

breweriesInfo("milwaukee");
//restaurantInfo();