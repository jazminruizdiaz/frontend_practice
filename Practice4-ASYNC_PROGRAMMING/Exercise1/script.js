const API_KEY = CONFIG.WEATHER_API_KEY;
const citySelect = document.getElementById("city");
const weatherContainer = document.getElementById("weather");
const weatherInfo = document.querySelector(".weather__info");

async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching the weather");
    }

    const data = await response.json();
    renderWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = `<p class="weather__error">${error.message}</p>`;
  }
}

function renderWeather(data) {
  const { name, country, localtime } = data.location;
  const { temp_c, condition, humidity, wind_kph } = data.current;
  const { daily_chance_of_rain } = data.forecast.forecastday[0].day;

  const [datePart] = localtime.split(" ");
  const dayOfWeek = new Date(datePart).toLocaleDateString("en-US", {
    weekday: "long",
  });

  weatherInfo.innerHTML = `
  <div class="weather__row">
    <div class="weather__left">
      <img src="${condition.icon}" alt="${condition.text}">
      <strong>${temp_c} °C</strong>
      <p>Precipitation: ${daily_chance_of_rain}%</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind: ${wind_kph} km/h</p>
    </div>
    <div class="weather__right">
      <p><strong>${name}, ${country}</strong></p>
      <p>${dayOfWeek}</p>
      <p>${condition.text}</p>
    </div>
  </div>
`;
}

citySelect.addEventListener("change", (e) => {
  getWeather(e.target.value);
});

getWeather(citySelect.value);
