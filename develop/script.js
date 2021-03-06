//when city name is entered and button is pushed
//event listener on button
var cities = [];

var date = moment().format("L");

function hideRightDiv() {
  $(".start").hide();
}
function unhideRightDiv() {
  $(".start").show();
}

function lastSearchWeather() {
  var lastSearch = localStorage.getItem("current-city");
  $("#display-city").text(lastSearch + ": " + date);

  console.log("current city " + lastSearch);
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${lastSearch}&appid=d956114e4cd342e93a56df7db83a8d24&units=imperial`;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var currentTemp = response.main.temp;
    $("#temperature").text("Temperature: " + currentTemp + " °F");
    var currentHumidity = response.main.humidity;
    $("#humidity").text("Humidity: " + currentHumidity + "%");
    var currentWind = response.wind.speed;
    $("#wind-speed").text("Wind Speed: " + currentWind + " MPH");
    var lat = response.coord.lat;
    var lon = response.coord.lon;
  });
}

hideRightDiv();
lastSearchWeather();

$("#search-button").on("click", function (event) {
  event.preventDefault();
  unhideRightDiv();
  var city = $("#search-field").val().trim();
  localStorage.setItem("current-city", city);
  cities.push(city);
  $("#display-city").text(city + ": " + date);

  //api call for current weather
  function displayCurrentWeather() {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d956114e4cd342e93a56df7db83a8d24&units=imperial`;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentTemp = response.main.temp;
      $("#temperature").text("Temperature: " + currentTemp + " °F");
      var currentHumidity = response.main.humidity;
      $("#humidity").text("Humidity: " + currentHumidity + "%");
      var currentWind = response.wind.speed;
      $("#wind-speed").text("Wind Speed: " + currentWind + " MPH");
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      //api call for UV index
      var queryURL = `http://api.openweathermap.org/data/2.5/uvi?appid=d956114e4cd342e93a56df7db83a8d24&lat=${lat}&lon=${lon}`;
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        var currentUV = response.value;
        $("#uv-index").text("UV Index: " + currentUV);
      });
    });
  }
  displayCurrentWeather();
  //api call for 5 day forecast
  function displayForecast() {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d956114e4cd342e93a56df7db83a8d24&units=imperial`;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response.list[1].main.temp);
      $("#header-1").text(moment().add(1, "days").format("l"));
      $("#temp-1").text("Temp: " + response.list[1].main.temp + " °F");
      $("#humidity-1").text(
        "Humidity: " + response.list[1].main.humidity + "%"
      );

      $("#header-2").text(moment().add(2, "days").format("l"));
      $("#temp-2").text("Temp: " + response.list[2].main.temp + " °F");
      $("#humidity-2").text(
        "Humidity: " + response.list[2].main.humidity + "%"
      );

      $("#header-3").text(moment().add(3, "days").format("l"));
      $("#temp-3").text("Temp: " + response.list[3].main.temp + " °F");
      $("#humidity-3").text(
        "Humidity: " + response.list[3].main.humidity + "%"
      );

      $("#header-4").text(moment().add(4, "days").format("l"));
      $("#temp-4").text("Temp: " + response.list[4].main.temp + " °F");
      $("#humidity-4").text(
        "Humidity: " + response.list[4].main.humidity + "%"
      );

      $("#header-5").text(moment().add(5, "days").format("l"));
      $("#temp-5").text("Temp: " + response.list[5].main.temp + " °F");
      $("#humidity-5").text(
        "Humidity: " + response.list[5].main.humidity + "%"
      );
    });
  }
  displayForecast();
  addToHistory();

  $(".city-history").on("click", function (event) {
    event.preventDefault();
    var city = this.id;
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d956114e4cd342e93a56df7db83a8d24&units=imperial`;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentTemp = response.main.temp;
      $("#temperature").text("Temperature: " + currentTemp + " °F");
      var currentHumidity = response.main.humidity;
      $("#humidity").text("Humidity: " + currentHumidity + "%");
      var currentWind = response.wind.speed;
      $("#wind-speed").text("Wind Speed: " + currentWind + " MPH");
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      //api call for UV index
      var queryURL = `http://api.openweathermap.org/data/2.5/uvi?appid=d956114e4cd342e93a56df7db83a8d24&lat=${lat}&lon=${lon}`;
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        var currentUV = response.value;
        $("#uv-index").text("UV Index: " + currentUV);
      });
      function displayForecast() {
        var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d956114e4cd342e93a56df7db83a8d24&units=imperial`;
        $.ajax({
          url: queryURL,
          method: "GET",
        }).then(function (response) {
          console.log(response.list[1].main.temp);
          $("#header-1").text(moment().add(1, "days").format("l"));
          $("#temp-1").text("Temp: " + response.list[1].main.temp + " °F");
          $("#humidity-1").text(
            "Humidity: " + response.list[1].main.humidity + "%"
          );

          $("#header-2").text(moment().add(2, "days").format("l"));
          $("#temp-2").text("Temp: " + response.list[2].main.temp + " °F");
          $("#humidity-2").text(
            "Humidity: " + response.list[2].main.humidity + "%"
          );

          $("#header-3").text(moment().add(3, "days").format("l"));
          $("#temp-3").text("Temp: " + response.list[3].main.temp + " °F");
          $("#humidity-3").text(
            "Humidity: " + response.list[3].main.humidity + "%"
          );

          $("#header-4").text(moment().add(4, "days").format("l"));
          $("#temp-4").text("Temp: " + response.list[4].main.temp + " °F");
          $("#humidity-4").text(
            "Humidity: " + response.list[4].main.humidity + "%"
          );

          $("#header-5").text(moment().add(5, "days").format("l"));
          $("#temp-5").text("Temp: " + response.list[5].main.temp + " °F");
          $("#humidity-5").text(
            "Humidity: " + response.list[5].main.humidity + "%"
          );
        });
      }
      $("#display-city").text(city + ": " + date);
      displayForecast();
    });
  });
});

//this function adds each search item to the Search History div
function addToHistory() {
  $("#history").empty();
  for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.attr("class", "city-history");
    a.attr("id", cities[i]);
    a.text(cities[i]);
    $("#history").append(a);
  }
}
