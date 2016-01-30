var request = require('request');
var apiKey = require('./config.js').apiKey;
var zipcode = require('./config.js').zipcode;

function getWeather() {
    request('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',US&APPID='+apiKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the resp
        }
    });
    setTimeout(getWeather, 10000)
}

getWeather();
