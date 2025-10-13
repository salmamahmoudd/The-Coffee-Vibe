var menuToggle = document.querySelector('.menu-toggle'); 
var navLinks = document.querySelector('.nav-links'); 
var nav = document.querySelector('nav');

if(menuToggle){
  menuToggle.addEventListener('click', function (e){
    navLinks.classList.toggle('open');
  })
  document.addEventListener('click' , function(e){
    if(!nav.contains(e.target)){
      navLinks.classList.remove('open');
    }
  })
}
