function displayTemperature(response) {
  let temperature = (document.querySelector(".temperature").innerHTML =
    response.temperature.current);
  let city = (document.querySelector(".city").innerHTML = response.city);
  let description = (document.querySelector("#description").innerHTML =
    response.condition.description);
  let humidity = (document.querySelector(".humidity").innerHTML =
    response.temperature.humidity);
  let wind = (document.querySelector(".wind").innerHTML = response.wind.speed);
}

let apiKey = "047ff5f243b184d84367a2f1o1cta7f9";
let units = "imperial";
let city = "San Francisco";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayTemperature);
