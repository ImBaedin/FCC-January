// This is Cookeville's location
const COOKEVILLE ={
	latitude: 36.1628,
	longitude: -85.5016
};

// This is the weather api url
// I chose to make it a function rather than a static variable to make it easier to use
const WEATHER_API_URL = (latitude = COOKEVILLE.latitude, longitude = COOKEVILLE.longitude)=>`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;

// This function should run through these steps:
// 1. Get the user's location
// 2. Get the weather
// 4. Update the UI
const updateWeather = async () => {
	let location = COOKEVILLE;
	// Check if the user has location enabled

	// If they do, we can change the location object based on their location

	// If not, the location defaults to Cookeville

	// Now we use that location object to hit our API

	// Finally, we have everything we need to update the UI
}


// This is our hour interval
const HOUR = ;
setInterval(updateWeather, HOUR);

// The first thing we do is run the update the weather
updateWeather();


// const weatherName = document.querySelector('#weather-name');
// const weatherMain = document.querySelector('#weather-main');
// const weatherDesc = document.querySelector('#weather-desc');
// const weatherTemp = document.querySelector('#weather-temp');
