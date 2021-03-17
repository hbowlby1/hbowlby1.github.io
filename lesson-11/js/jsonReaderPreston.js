const requestURL = 'https://hbowlby1.github.io/lesson-9/json/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    const preston = towns[5];

    let firstEvent = preston.events[0];
    let secondEvent = preston.events[1];
    let thirdEvent = preston.events[2];

    document.querySelector("#event1").innerHTML = firstEvent;
    document.querySelector("#event2").innerHTML = secondEvent;
    document.querySelector("#event3").innerHTML = thirdEvent;
    
    
  });

