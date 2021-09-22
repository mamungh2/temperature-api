const loadTemp = () => {
    const fieldSearch = document.getElementById('field-search');
    const fieldText = fieldSearch.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${fieldText}&appid=1ff8c73ea6b3e65f931e80f4f904afd3&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemp(data));
}

const displayTemp = data => {
    console.log(data);
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name;
    const cityTemp = document.getElementById('city-temp');
    cityTemp.innerText = data.main.temp;
    const cityCondition = document.getElementById('city-condition');
    cityCondition.innerText = data.weather[0].main;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);



}