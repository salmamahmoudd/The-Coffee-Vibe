var menuToggle = document.querySelector('.menu-toggle'); 
var navLinks = document.querySelector('.nav-links'); 

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open'); 
});
