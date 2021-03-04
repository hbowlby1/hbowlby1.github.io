const requestURL = 'https://hbowlby1.github.io/lesson-9/json/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if(towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        h5.textContent = towns[i].motto;
        p1.innerHTML = "Year Founded: " + towns[i].yearFounded; 
        p2.innerHTML = "Population: " + towns[i].currentPopulation;
        p3.innerHTML = "Average Rainfall: " + towns[i].averageRainfall;
        image.setAttribute('src', "img/" + towns[i].photo);
        image.setAttribute('alt', "Photo of a building in fields in " + towns[i].name);


        let div = document.createElement('div');

        div.appendChild(h2);
        div.appendChild(h5);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        card.appendChild(image);
        card.appendChild(div);


        document.querySelector('div.cards').appendChild(card);
      }
    
      
    }
  });

