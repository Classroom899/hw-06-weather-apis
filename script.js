var inputValue = document.querySelector('.inputValue');
var submitInput = document.querySelector('.submitInput');
var name = document.querySelector('.name');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');


inputValue.addEventListener('click,', function display(currentWeather) {
    (`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKey}`)
        .then(response => response.JSON())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descriptionValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            description.innerHTML = descriptionValue;
            temp.innerHTML = tempValue;


        }) // Data is stuff that we receive back from the API



        .catch(err => alert('Wrong city name'))
});



