//below is the array for the list
const links = [
    {
        label: "Week 1 notes",
        url: "WDD330/week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "WDD330/week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "WDD330/week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "WDD330/week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "WDD330/week5/index.html"
    },
    {
        label: "Week 6 Todo Challenge",
        url: "WDD330/week6/todo.html"
    },
    {
        label: "Week 7 Notes",
        url: "WDD330/week7/index.html"
    },
    {
        label: "Week 8 Notes",
        url: "WDD330/week8/index.html"
    }
];

// grabs the ul

const theList = document.querySelector('#wdd330Assign');

for (i = 0; i <= links.length - 1; i++) {
    const a = document.createElement('a');
    const br = document.createElement('br');
    //adding the id addLink so I can loop through and add the a tags inside the li
    a.setAttribute('href', links[i].url);
    a.innerText = links[i].label;

    // const a = document.createElement('a')
    // a.setAttribute('href', links[i].url);

    theList.appendChild(a);
    theList.appendChild(br);

// all code below is being reviewed and reworked.

// loops through the links array and grabs the label and sets it in the li
// for (i = 0; i <= links.length - 1; i++) {
//     const li = document.createElement('li');
//     //adding the id addLink so I can loop through and add the a tags inside the li
//     li.setAttribute('id', 'addLink');
//     li.innerText = links[i].label + ': '

//     // const a = document.createElement('a')
//     // a.setAttribute('href', links[i].url);

//     theList.appendChild(li);
}

//grabs the li nested in the ul 
const theLi = document.querySelector('#addLink');


//code below needs to be re-worked until I can find a solution on putting the a tags on the same line as the li.
// loops again to add the links to the li element


// for (i = 0; i <= links.length - 1; i++){
//     const a = document.createElement('a');
//     a.setAttribute('href', links[i].url);
//     a.innerText = "Click Here";

//     theLi.appendChild(a);
// }
