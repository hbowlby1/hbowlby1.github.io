const newURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.4223&lon=-111.8226&units=imperial&exclude=minutely,hourly&appid=e69ce65d7caaa3280ccf25e0403133f9';

fetch(newURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        if(jsonObject.hasOwnProperty('alerts')){
            let message = "Warning " + jsonObject.alerts.event;
            message += "<br />" + jsonObject.alerts.description;
            document.querySelector("#alerts").innerHTML = message;
        }else{
            document.querySelector("#alerts").innerHTML = "This means there are no alerts."
        }
    });


function closeAlert(){
    document.querySelector(".alert").style.display = "none";
}