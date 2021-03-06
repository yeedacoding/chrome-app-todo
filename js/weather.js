const API_KEY ="02ffb6143ef2b36b6f6a16d2d351d410";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather div:first-child");
        const weather = document.querySelector("#weather div:last-child");
       city.innerText = data.name;
       weather.innerText = ` ${Math.floor(data.main.temp)}℃ @ ${data.weather[0].main}`;
    }); 
}
function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
