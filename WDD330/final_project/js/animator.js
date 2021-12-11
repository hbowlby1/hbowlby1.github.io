//SELECT ELEMENTS
let dlBtn = document.querySelector(".delete");
function fadeAway(){
    dlBtn.addEventListener("click", function () {
        dlBtn.className = ".animated";
    }, false);
}