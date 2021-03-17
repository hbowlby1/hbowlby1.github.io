const requestURL = 'https://hbowlby1.github.io/lesson-9/json/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    const soda = towns[6];

    let firstEvent = soda.events[0];
    let secondEvent = soda.events[1];
    let thirdEvent = soda.events[2];

    document.querySelector("#event1").innerHTML = firstEvent;
    document.querySelector("#event2").innerHTML = secondEvent;
    document.querySelector("#event3").innerHTML = thirdEvent;
    
    
  });

