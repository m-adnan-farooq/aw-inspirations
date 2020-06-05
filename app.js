const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    nav.classList.toggle('open');
    
})
