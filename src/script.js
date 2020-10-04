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
  celciusTemperature = response.data.main.temp;
}

function showDefault(city) {
  let apiKey = "881f23c47e69b4bf462c95657d48577f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let firstTemperature = document.querySelector("#firstTemp");
  firstTemperature.innerHTML = Math.round(response.data.list[1].main.temp);
  let secondTemperature = document.querySelector("#secondTemp");
  secondTemperature.innerHTML = Math.round(response.data.list[2].main.temp);
  let thirdTemperature = document.querySelector("#thirdTemp");
  thirdTemperature.innerHTML = Math.round(response.data.list[3].main.temp);
  let fourthTemperature = document.querySelector("#fourthTemp");
  fourthTemperature.innerHTML = Math.round(response.data.list[4].main.temp);
  let fifthTemperature = document.querySelector("#fifthTemp");
  fifthTemperature.innerHTML = Math.round(response.data.list[5].main.temp);
  let firstIcon = document.querySelector("#firstIcon");
  firstIcon.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png" width="40px" height="40px"/>`;
  let secondIcon = document.querySelector("#secondIcon");
  secondIcon.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png" width="40px" height="40px"/>`;
  let thirdIcon = document.querySelector("#thirdIcon");
  thirdIcon.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png" width="40px" height="40px"/>`;
  let fourthIcon = document.querySelector("#fourthIcon");
  fourthIcon.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${response.data.list[4].weather[0].icon}@2x.png" width="40px" height="40px"/>`;
  let fifthIcon = document.querySelector("#fifthIcon");
  fifthIcon.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${response.data.list[5].weather[0].icon}@2x.png" width="40px" height="40px"/>`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  showDefault(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showCelcius(event) {
  event.preventDefault();
  let celciusElement = document.querySelector("#temp");
  celciusElement.innerHTML = Math.round(celciusTemperature);
}
let celciusClick = document.querySelector("#celcius");
celciusClick.addEventListener("click", showCelcius);

function showFarenheit(event) {
  event.preventDefault();
  let farenheitTemp = (celciusTemperature * 9) / 5 + 32;
  let farenheitElement = document.querySelector("#temp");
  farenheitElement.innerHTML = Math.round(farenheitTemp);
}
let farenheitClick = document.querySelector("#farenheit");
farenheitClick.addEventListener("click", showFarenheit);

let celciusTemperature = null;

showDefault("Amsterdam");
