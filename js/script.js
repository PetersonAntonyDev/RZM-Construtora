/*var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        ul.classList.add('close');
    }else{
        ul.classList.remove('close');
        ul.classList.add('open');
    }
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});*/

const btnMobile = document.getElementById('btn-mobile');

function togglemenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expaned', active);
    if(active) {
        event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', togglemenu)
btnMobile.addEventListener('touchstart', togglemenu)

var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 3000);