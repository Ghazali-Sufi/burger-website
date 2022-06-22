const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('navbar');
const navClose = document.getElementById("nav-close");

navBtn.addEventListener('click', function() {
    navBar.classList.add('showNav');
})

navClose.addEventListener('click', function() {
    navBar.classList.remove("showNav");
})