const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'YOUR-KEY-HERE'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Ottawa', options)
	.then(response => response.json())
	.then(data => {
        // Get Location
        const currentLocation = data.location;

        // Get Location Data
        const lName = currentLocation.name.toUpperCase();
        const lRegion = currentLocation.region.toUpperCase();
        const lCountry = currentLocation.country.toUpperCase();
        const lTime = currentLocation.localtime;

        // Get Weather
        const currentWeather = data.current;

        // Get Weather Data
        const celsius = currentWeather.temp_c
        const celsiusFeels = currentWeather.feelslike_c
        const fahrenheit = currentWeather.temp_f
        const fahrenheitFeels = currentWeather.feelslike_f
        const humidity = currentWeather.humidity
        
        // Get Weather Condition
        const forecastName = currentWeather.condition.text.toUpperCase();
        const forecastImage = currentWeather.condition.icon.slice(2);
  
        //Send Data to Main Page
        document.querySelector('.forecastName').innerHTML += forecastName 
        document.querySelector('.forecastImage').innerHTML += '<img src="https://' + forecastImage + '">'

        document.querySelector('.celsius').innerHTML += 'Celsius: ' + celsius + '<br>Feels Like: ' + celsiusFeels
        document.querySelector('.fahrenheit').innerHTML += 'Fahrenheit: ' + fahrenheit + '<br>Feels Like: ' + fahrenheitFeels

        document.querySelector('.humidity').innerHTML += 'Humidity: ' + humidity

        document.querySelector('.city').innerHTML += lName
        document.querySelector('.time').innerHTML += 'TIME: ' + lTime.slice(11)
        document.querySelector('.regionCountry').innerHTML += lRegion + ' ' + lCountry        
    })

	.catch(err => console.error(err));