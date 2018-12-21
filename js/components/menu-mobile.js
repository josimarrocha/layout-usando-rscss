(function(){
    'use strict';
    const $menuHamburguer = document.querySelector('.menu');
    const $closeMenu      = document.querySelector('.main-menu .close');
    const $listaMenu      = document.querySelector('.main-menu .items') 
    $menuHamburguer.addEventListener('click', function (e) {
        e.preventDefault();
        $listaMenu.classList.add('-isActive');
    });
    $closeMenu.addEventListener('click', function(e){
        e.preventDefault();
        $listaMenu.classList.remove('-isActive');
    });
})();