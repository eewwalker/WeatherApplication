function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperature = (document.querySelector(".temperature").innerHTML =
    Math.round(response.data.temperature.current));
  let city = (document.querySelector(".city").innerHTML = response.data.city);
  let description = (document.querySelector("#description").innerHTML =
    response.data.condition.description);
  let humidity = (document.querySelector(".humidity").innerHTML =
    "Humidity: " + response.data.temperature.humidity + "%");
  let wind = (document.querySelector(".wind").innerHTML =
    "Wind: " + Math.round(response.data.wind.speed) + "mph");
  let date = document.querySelector(".date");
  date.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "047ff5f243b184d84367a2f1o1cta7f9";
let units = "imperial";
let city = "London";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayTemperature);
