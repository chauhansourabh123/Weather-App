const apiKey = "e564e5344bcf6f1282ff0e93979261bd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.getElementById('searchBtn');
let inputValue = document.getElementById('searchedTemperature');
const inputForm = document.getElementById('inputForm');

inputForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    myFun(inputValue.value);
})
searchBtn.addEventListener('click', () => {
    myFun(inputValue.value);
});

window.addEventListener('load', () => {
    myFun('Delhi')
})
function myFun(city) {

    fetch(`${apiUrl}${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(value => {
            return updateTemperatureDetails(value)
        })
        .catch(err => console.log(err))
}

function updateTemperatureDetails(value) {
    document.getElementById('temperature').innerHTML = `${Math.round(value.main.temp)}°C`
    document.getElementById('country').innerHTML = `${value.name}`
    document.getElementById('humidity').innerHTML = `${value.main.humidity}`
    document.getElementById('windSpeed').innerHTML = `${value.wind.speed} Km/h`
    inputValue.value = '';
}
