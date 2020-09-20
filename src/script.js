let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let weekDays = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[weekDays];

let todayDate = document.querySelector("#date");
todayDate.innerHTML = `${hours}:${minutes} ${day}`;

function showWeather(response) {
  document.querySelector("#placeName").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-type").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}

function showDefault(city) {
  let apiKey = "881f23c47e69b4bf462c95657d48577f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  showDefault(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showCelcius() {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "19";
}
let celciusClick = document.querySelector("#celcius");
celciusClick.addEventListener("click", showCelcius);

function showFarenheit() {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "66";
}
let farenheitClick = document.querySelector("#farenheit");
farenheitClick.addEventListener("click", showFarenheit);

showDefault("Amsterdam");
