function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "047ff5f243b184d84367a2f1o1cta7f9";
let units = "imperial";
let city = "San Francisco";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayTemperature);
