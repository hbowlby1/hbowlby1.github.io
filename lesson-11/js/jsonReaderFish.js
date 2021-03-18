const requestURL = 'https://hbowlby1.github.io/lesson-9/json/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    const fish = towns[1];


    let firstEvent = fish.events[0];
    let secondEvent = fish.events[1];
    let thirdEvent = fish.events[2];
    let fourthEvent = fish.events[3];

    document.querySelector("#event1").innerHTML = firstEvent;
    document.querySelector("#event2").innerHTML = secondEvent;
    document.querySelector("#event3").innerHTML = thirdEvent;
    document.querySelector("#event4").innerHTML = fourthEvent;
    
    
  });

