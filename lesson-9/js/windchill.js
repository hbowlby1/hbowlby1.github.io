function isWindChill(){
    let temperature = parseInt(document.querySelector("#temperature").textContent);
    let windSpeed = parseInt(document.querySelector("#windSpeed").textContent);

    if(temperature <= 50 && windSpeed >= 3.0){
        windChill()
    }
    else{
        document.querySelector("#windChill").innerHTML = "N/A"
    }

}

function windChill(){
// gets the content inside of the spans for temperature and wind speed
let temperature = document.querySelector("#temperature").textContent;
let windSpeed = document.querySelector("#windSpeed").textContent;

wind_chill = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 *(temperature * (Math.pow(windSpeed, 0.16))));
wind_chill = Math.round(wind_chill) + "&#176;F";


return document.querySelector("#windChill").innerHTML = wind_chill;

}

isWindChill();