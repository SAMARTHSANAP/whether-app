async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = "ec4f084323c2cec2fcfdb57084a9d925"; // replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const result = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Condition: ${data.weather[0].main}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
    `;
    document.getElementById('weatherResult').innerHTML = result;
  } else {
    document.getElementById('weatherResult').innerHTML = `<p>City not found ❌</p>`;
  }
}