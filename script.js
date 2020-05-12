// function searchCurrentWeather {


// }

var inputValue = document.querySelector('.inputValue');
var submitInput = document.querySelector('.submitInput');
var name = document.querySelector('.name');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKey}`)