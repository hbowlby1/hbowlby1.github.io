//https://hbowlby1.github.io/cactus_commerce/json/directory.json
const requestURL = 'https://hbowlby1.github.io/cactus_commerce/json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject["business"];

    for (let i=0; i<business.length; i++){
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');

        h2.textContent = business[i].name;
        img.setAttribute('src', business[i].logo);
        img.setAttribute('alt', "logo for " + business[i].name);
        
        if(business[i].website != "N/A"){
            website.setAttribute('href', business[i].website);
            website.innerHTML = "Website: " + business[i].name;
        }else{
            website.setAttribute('href', "#");
            website.innerHTML = "No Website Yet."
        }
        address.innerHTML = "Address: " + business[i].address;
        phone.innerHTML = "Phone: " + business[i].phone;
        email.innerHTML = "Email: " + business[i].email;

        let div = document.createElement('div');

        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(website);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(email);
        card.appendChild(div);

        document.querySelector('div.cards').appendChild(card);
    }
    
    
  });