//when city name is entered and button is pushed
//event listener on button
var cities = [];
$("#search-button").on("click", function (event) {
  event.preventDefault();
  var city = $("#search-field").val().trim();
  console.log(city);
  cities.push(city);
  //   localStorage.setItem("");
  function displayCurrentWeather() {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d956114e4cd342e93a56df7db83a8d24`;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      //   $('#movies-view').text(JSON.stringify(response));
    });
  }
  displayCurrentWeather();
  addToHistory();
});

function addToHistory() {
  $("#history").empty();
  for (var i = 0; i < cities.length; i++) {
    var a = $("<button>");
    a.addClass("city-history");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    $("#history").append(a);
  }
}
//fucntion:
//h1 element created with input and moment js date AND icon
//appended to main div
//def var city = input
//api call for weather: current weather and 5 day forecast
//appended to both main divs
//city name button created and added to second div
//
