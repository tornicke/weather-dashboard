const searchButton = document.getElementById("searchButton");
const city = document.getElementById("cityInput");
const API_KEY = "ef8c799597d6e9a71907b1065861bf21";

const callApi = (event) => {
  event.preventDefault();
  console.log(city.value);

  /*fetching lat. and lon. information based on the city*/
  fetch(
    /*imperial units so the results match the mock-up*/
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&appid=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      fetchWeather(data.coord.lat, data.coord.lon, data.name);
    });
};

const fetchWeather = (lat, lon, cityName) => {
  console.log(city.value);

  fetch(
    /*imperial units so the results match the mock-up*/
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=imperial&appid=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      currentWeather(data.current, cityName);
      firstDayForecast(data.daily[1]);
      secondDayForecast(data.daily[2]);
      thirdDayForecast(data.daily[3]);
      fourthDayForecast(data.daily[4]);
      fifthDayForecast(data.daily[5]);
      /*dynamically generated box with a border*/
      $(current).css({
        border: "1px solid #000000",
        "box-sizing": "border-box",
      });
      /*dynamically styling the daily boxes for the forecast*/
      $(".dailyBox").css({
        float: "left",
        width: "150px",
        height: "220px",
        color: "white",
        background: "rgb(62, 63, 93)",
        margin: "5px",
      });
    });
};

searchButton.addEventListener("click", callApi);

/*dynamically generating weather elements*/
const currentWeather = (currentData, cityName) => {
  /*emptying the contents so new results are generated once the new search has been made*/
  $("#current").empty();
  /*converting the current date and time into the American format using moment.js*/
  let dateString = moment.unix(currentData.dt).format("MM/DD/YYYY");
  /*adding the weather icon dynamically for the current weather info box*/
  let icon = $("<img>").attr(
    "src",
    `http://openweathermap.org/img/wn/${currentData.weather[0].icon}.png`
  );
  $("#current").append(icon);
  var cityNameEl = $("<h2>").text(`${cityName} (${dateString})`);
  $("#current").append(cityNameEl);
  var tempEl = $("<p>").text(`Temp: ${currentData.temp} °F`);
  $("#current").append(tempEl);
  var windEl = $("<p>").text(`Wind: ${currentData.wind_speed} MPH`);
  $("#current").append(windEl);
  var humidityEl = $("<p>").text(`Humidity: ${currentData.humidity} %`);
  $("#current").append(humidityEl);
  var uviEl = $("<p>").text(`UV Index: ${currentData.uvi}`);
  $("#current").append(uviEl);
};

/*adding a grandparent element (box for the 5-day forecast), parent element (box for each daily forecast) and child elements (each individual weather element)*/

/*forecast for day 1*/
const firstDayForecast = (firstDayData) => {
  /*emptying the contents so new results are generated once the new search has been made*/
  $("#dayOneForecast").empty();
  /*converting the current date and time into the American format using moment.js*/
  let firstDayDateString = moment.unix(firstDayData.dt).format("MM/DD/YYYY");
  /*adding the weather icon dynamically for the Day 1 weather info box*/
  let icon = $("<img>").attr(
    "src",
    `http://openweathermap.org/img/wn/${firstDayData.weather[0].icon}.png`
  );
  $("#dayOneForecast").append(icon);
  var firstDayDateEl = $("<h3>").text(`${firstDayDateString}`);
  $("#dayOneForecast").append(firstDayDateEl);
  var tempEl = $("<p>").text(`Temp: ${firstDayData.temp.day} °F`);
  $("#dayOneForecast").append(tempEl);
  var windEl = $("<p>").text(`Wind: ${firstDayData.wind_speed} MPH`);
  $("#dayOneForecast").append(windEl);
  var humidityEl = $("<p>").text(`Humidity: ${firstDayData.humidity} %`);
  $("#dayOneForecast").append(humidityEl);
};

/*forecast for day 2*/
const secondDayForecast = (secondDayData) => {
  /*emptying the contents so new results are generated once the new search has been made*/
  $("#dayTwoForecast").empty();
  /*converting the current date and time into the American format using moment.js*/
  let secondDayDateString = moment.unix(secondDayData.dt).format("MM/DD/YYYY");
  /*adding the weather icon dynamically for the Day 2 weather info box*/
  let icon = $("<img>").attr(
    "src",
    `http://openweathermap.org/img/wn/${secondDayData.weather[0].icon}.png`
  );
  $("#dayTwoForecast").append(icon);
  var secondDayDateEl = $("<h3>").text(`${secondDayDateString}`);
  $("#dayTwoForecast").append(secondDayDateEl);
  var tempEl = $("<p>").text(`Temp: ${secondDayData.temp.day} °F`);
  $("#dayTwoForecast").append(tempEl);
  var windEl = $("<p>").text(`Wind: ${secondDayData.wind_speed} MPH`);
  $("#dayTwoForecast").append(windEl);
  var humidityEl = $("<p>").text(`Humidity: ${secondDayData.humidity} %`);
  $("#dayTwoForecast").append(humidityEl);
};

/*forecast for day 3*/
const thirdDayForecast = (thirdDayData) => {
  /*emptying the contents so new results are generated once the new search has been made*/
  $("#dayThreeForecast").empty();
  /*converting the current date and time into the American format using moment.js*/
  let thirdDayDateString = moment.unix(thirdDayData.dt).format("MM/DD/YYYY");
  /*adding the weather icon dynamically for the Day 3 weather info box*/
  let icon = $("<img>").attr(
    "src",
    `http://openweathermap.org/img/wn/${thirdDayData.weather[0].icon}.png`
  );
  $("#dayThreeForecast").append(icon);
  var thirdDayDateEl = $("<h3>").text(`${thirdDayDateString}`);
  $("#dayThreeForecast").append(thirdDayDateEl);
  var tempEl = $("<p>").text(`Temp: ${thirdDayData.temp.day} °F`);
  $("#dayThreeForecast").append(tempEl);
  var windEl = $("<p>").text(`Wind: ${thirdDayData.wind_speed} MPH`);
  $("#dayThreeForecast").append(windEl);
  var humidityEl = $("<p>").text(`Humidity: ${thirdDayData.humidity} %`);
  $("#dayThreeForecast").append(humidityEl);
};

/*forecast for day 2*/
const fourthDayForecast = (fourthDayData) => {
  /*emptying the contents so new results are generated once the new search has been made*/
  $("#dayFourForecast").empty();
  /*converting the current date and time into the American format using moment.js*/
  let fourthDayDateString = moment.unix(fourthDayData.dt).format("MM/DD/YYYY");
  /*adding the weather icon dynamically for the Day 4 weather info box*/
  let icon = $("<img>").attr(
    "src",
    `http://openweathermap.org/img/wn/${fourthDayData.weather[0].icon}.png`
  );
  $("#dayFourForecast").append(icon);
  var fourthDayDateEl = $("<h3>").text(`${fourthDayDateString}`);
  $("#dayFourForecast").append(fourthDayDateEl);
  var tempEl = $("<p>").text(`Temp: ${fourthDayData.temp.day} °F`);
  $("#dayFourForecast").append(tempEl);
  var windEl = $("<p>").text(`Wind: ${fourthDayData.wind_speed} MPH`);
  $("#dayFourForecast").append(windEl);
  var humidityEl = $("<p>").text(`Humidity: ${fourthDayData.humidity} %`);
  $("#dayFourForecast").append(humidityEl);
};

/*forecast for day 2*/
const fifthDayForecast = (fifthDayData) => {
  /*emptying the contents so new results are generated once the new search has been made*/
  $("#dayFiveForecast").empty();
  /*converting the current date and time into the American format using moment.js*/
  let fifthDayDateString = moment.unix(fifthDayData.dt).format("MM/DD/YYYY");
  /*adding the weather icon dynamically for the Day 5 weather info box*/
  let icon = $("<img>").attr(
    "src",
    `http://openweathermap.org/img/wn/${fifthDayData.weather[0].icon}.png`
  );
  $("#dayFiveForecast").append(icon);
  var fifthDayDateEl = $("<h3>").text(`${fifthDayDateString}`);
  $("#dayFiveForecast").append(fifthDayDateEl);
  var tempEl = $("<p>").text(`Temp: ${fifthDayData.temp.day} °F`);
  $("#dayFiveForecast").append(tempEl);
  var windEl = $("<p>").text(`Wind: ${fifthDayData.wind_speed} MPH`);
  $("#dayFiveForecast").append(windEl);
  var humidityEl = $("<p>").text(`Humidity: ${fifthDayData.humidity} %`);
  $("#dayFiveForecast").append(humidityEl);
};
