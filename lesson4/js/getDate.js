// setting the functions
getTheDate();
lastModifiedDoc();

// gets the current date
function getTheDate() {

    
    
    let d = new Date();

    let theYear = d.getFullYear().toString();

    document.querySelector(".getDate").innerHTML = "&copy Beyond the Weather " + theYear;
}

//gets the date for when the document was last modified

function lastModifiedDoc() {
    let d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ocotber", "November", "December"];
    document.querySelector("#theDate").innerHTML = days[d.getDay()] + ", " + d.getDate() + " "+ month[d.getMonth()] + " " +  d.getFullYear();
}