// API URL from OpenWeatherMap.org
const forecastURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.4223&lon=-111.8226&units=imperial&exclude=minutely,hourly&appid=e69ce65d7caaa3280ccf25e0403133f9';

fetch(forecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // get today's weather info
        let forecast = document.getElementById('weather-forecast');

        let output =
`<div class="weather-large">
<div class="weather-current-div">
<div class="weather-info">
    <div>
        Today's Weather: ${jsonObject.current.weather[0].description}
    </div>
    <div>
        Temp: ${Math.round(jsonObject.current.temp)}&deg;F
    </div>
    <div>
        Humidity: ${jsonObject.current.humidity}%
    </div>
    <img src="https://openweathermap.org/img/wn/${jsonObject.current.weather[0].icon}@2x.png" alt="${jsonObject.current.weather[0].description}" />
</div>
</div>`;

        output += '<div class="weather-card-bar">';

        // get the next 3 days
        for (let a = 1; a <= 3; a++) {
            let date = new Date(jsonObject.daily[a].dt * 1000);
            output +=
`
<div class="weather-card">
    <div>
    </div>
    <div>
        ${dayName[date.getDay()]}
    </div>
    <img src="https://openweathermap.org/img/wn/${jsonObject.daily[a].weather[0].icon}@2x.png"
         alt="${dayName[date.getDay()]} - ${jsonObject.daily[a].weather[0].description}" />
    <div>
        High: ${Math.round(jsonObject.daily[a].temp.max)}&deg;F
    </div>
    <div>
        Low: ${Math.round(jsonObject.daily[a].temp.min)}&deg;F
    </div>
</div>
`;
        }
        output += '</div></div>';
        forecast.innerHTML += output;

        // check for weather alerts
        if (jsonObject.hasOwnProperty('alerts')) {
            let alertMsg = "Alert: " + jsonObject.alerts.event;
            alertMsg += "<br />" + jsonObject.alerts.description;
            document.getElementById("alert-message").innerHTML = alertMsg;
            // display the alert message
            document.getElementById("weather-alert-div").style.display = 'block';

        } else { // no alerts were located; display a message to show functionality
            // shift the top margin to make room for the false alert
            topMargin('main-body', '40px');
            // display a false alert
            document.getElementById("alert-message").innerHTML = "No weather alerts. Functional demonstration.";
            document.getElementById("weather-alert-div").style.display = 'block';
        }

        
    });