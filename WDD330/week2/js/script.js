function divDisplay(){
    let userInput = document.querySelector("#userIn").value;

    document.querySelector("#divDisplay").innerHTML = userInput;
}

function sumOf(){
    let ourSum = 0;
    let userInput = parseFloat(document.getElementById("userNumber").value);

    for(i=userInput; i >= 0; i--){
        ourSum += i;
        console.log(i);
    }

    document.getElementById("sumDisplay").innerHTML = ourSum;
}

let prevNum = parseFloat(document.getElementById("firstNum").value);
let newNum = parseFloat(document.getElementById("addNum").value);

function numAdder(){
    let total = prevNum + newNum;
    document.getElementById("sumOfNums").innerHTML = "Total: " + total;
}

const numMult = () => prevNum * newNum;