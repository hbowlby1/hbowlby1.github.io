function toggleMenu(){
    var hamburger = document.querySelector('#hamburger');
    var theNav = document.querySelector('#navigation');

    hamburger.addEventListener('click', () => {
        theNav.classList.toggle('show');
    })
}