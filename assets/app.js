
    const randomBtn = document.querySelector('#generate-btn')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const foodPairingDisplay = document.querySelector('.food-pairing')
    


    function getData() {
        
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()

            })
            .then(data => {
                const name = data[0].name
                const description = data[0].description
                const ibu = data[0].ibu
                const abv = data[0].abv
                const foodPairing = data[0].food_pairing


                randomBeer.innerHTML = name  + ''  +  ibu  +  ''  +  abv
                descriptionDisplay.innerHTML = description
                foodPairingDisplay.innerHTML = foodPairing

            })
    

    
        }


