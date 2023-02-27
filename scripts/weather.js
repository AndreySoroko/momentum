// https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=122f49d32b4a2b9ccd477fc7f4b5d15d&units=metric



const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

city.addEventListener('change', getWeather)

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=122f49d32b4a2b9ccd477fc7f4b5d15d&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather()