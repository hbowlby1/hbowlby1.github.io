const hamburger = document.querySelector("#hamburger");
const theNav = document.querySelector("#nav-ul");

hamburger.addEventListener('click', () => {
    theNav.classList.toggle('show');
})
