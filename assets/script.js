var cityRestaurantSearch = document.getElementById("c-r-search")
var foodSearchBtn = document.querySelector("#food-btn");
var cityBrewerySearch = document.getElementById("c-b-search");
var drinkSearchBtn = document.querySelector("#drink-btn");
var errorRestaurant = document.querySelector("#error1")
var errorBreweries = document.querySelector("#error2")

//Details of search
var restNameEl = document.querySelector("#restaurant-name")
var foodLocation = document.querySelector("#r-location")
var cuisine = document.querySelector("#cuisine")
var menu = document.querySelector("#menu")
var averageCost = document.querySelector("#avg-cost")
var foodNumber = document.querySelector("#r-number")
var breweryNameEl = document.querySelector("#brewery-name")
var breweryLocation = document.querySelector("#b-location")
var breweryNumber = document.querySelector("#b-number")
var breweryWebsite = document.querySelector("#b-website")

$(foodSearchBtn).click(function () {
    if (cityRestaurantSearch.value === "") {
        console.log("Hey");
        $(errorRestaurant).append("Please enter a city.");
    } else {
        $(errorRestaurant).empty();
        var city = cityRestaurantSearch.value.trim();
        restaurantInfo(city);
    }
});


$(drinkSearchBtn).click(function () {
    if (cityBrewerySearch.value === "") {
        console.log("Whats Up");
        $(errorBreweries).append("Please enter a city.");
    }
    else {
        $(errorBreweries).empty();
        var city2 = cityBrewerySearch.value.trim();
        breweriesInfo(city2);
    }
});


var restaurantInfo = function(city) {
    // format api url
    var cityApiUrl = "https://developers.zomato.com/api/v2.1/cities?q=" + city + "&count=10";

    var getApi = {
        method: 'GET',
        headers: {
            "Accept": "application/json", 
            "user-key": "f20a5c02c6aeaa22f17a54142d0cfb60"
        }
    };
    // fetch
    fetch(cityApiUrl, getApi)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            
            var restaurantApiUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=" + data.location_suggestions[0].id + "&entity_type=city";
            return fetch(restaurantApiUrl, getApi);
            
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            // append or attach info
            var linkText = "View Menu on Zomato";
            // go through array list
            for (var i = 0; i < data.restaurants.length; i++) {
                // pick random restaurant
                var randomRestaurant = Math.floor(Math.random() * (data.restaurants.length - 1));
                // append info to elements
                restNameEl.innerHTML = data.restaurants[randomRestaurant].restaurant.name;
                foodLocation.innerHTML = data.restaurants[randomRestaurant].restaurant.location.address;
                cuisine.innerHTML = data.restaurants[randomRestaurant].restaurant.cuisines;
                menu.innerHTML = linkText.link(data.restaurants[randomRestaurant].restaurant.menu_url);
                averageCost.innerHTML = data.restaurants[randomRestaurant].restaurant.average_cost_for_two;
                foodNumber.innerHTML = data.restaurants[randomRestaurant].restaurant.phone_numbers;
            }
        });
};

var breweriesInfo = function (city2) {
    // format url
    var brewApiUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city2 + "&per_page=50";

    // fetch
    fetch(brewApiUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            // append info or attach info
            var randomBrewery = Math.floor(Math.random() * (data.length - 1));
            breweryNameEl.innerHTML = data[randomBrewery].name;
            breweryLocation.innerHTML = data[randomBrewery].street + "   " + data[0].city + ", " + data[0].state;
            breweryNumber.innerHTML = data[randomBrewery].phone;
            breweryWebsite.innerHTML = data[randomBrewery].website_url.link(data[randomBrewery].website_url);
            if (data[randomBrewery].phone === "") {
                breweryNumber.innerHTML = "<span class='font-bold'> N/A </span>";
            }

            if (data[randomBrewery].website_url === "") {
                breweryWebsite.innerHTML = "<span class='font-bold'> N/A </span>";
            }
        });
};
