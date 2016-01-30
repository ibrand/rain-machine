var request = require('request');
var apiKey = require('./config.js').apiKey;
var zipcode = require('./config.js').zipcode;

var player = require('play-sound')(opts = {});

function getWeather() {
    request('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',US&APPID='+apiKey, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var weatherData = JSON.parse(body);
            var weatherId = weatherData.weather[0].id;

            console.log(weatherData) // Print the resp
            if (weatherId >= 200 && weatherId < 600) {
                player.play('./Audio/rainyMood.mp3', function(err){
                    console.log('ERROR PLAYING MP3');
                });
            }
        }
    });

    // Only GETs every 10 minutes since the audio loop is 12 minutes long
    setTimeout(getWeather, 10000);
}

getWeather();
