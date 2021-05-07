let now = new Date();
let h4 = document.querySelector("h4");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

h4.innerHTML = `${day}, ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#temp").innerHTML = response.data.name;
  document.querySelector("h3").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}

function search(event) {
  event.preventDefault();
  let apiKey = "30506a58371f72a45aab62f40ca6cec5";
  let city = document.querySelector("#city-name").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
  let h3 = document.querySelector("h3");
  h3.innerHTML = temperature;
}

let apiKey = "30506a58371f72a45aab62f40ca6cec5";
let units = "metric";
let city = document.querySelector("#city-name").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
