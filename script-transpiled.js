'use strict';

var navLinks = Array.from(document.querySelectorAll('.navigation__link')); // nav links
var navCheck = document.getElementById('nav-toggle'); // nav checkbox
var popup = document.getElementById('popup'); // popup
var btnTop = document.querySelector('.btn-top'); // button to top

//Add event listener to each nav link
navLinks.forEach(function (cur) {
    //On click uncheck nav checkbox
    cur.addEventListener('click', function () {
        return navCheck.checked = false;
    });
});

//Close popup when clicked outside
popup.addEventListener('click', function (event) {
    var className = void 0;
    className = event.target.className;

    //find better way of doing this
    if (className.includes('popup__') || className.includes('header') || className.includes('btn')) {
        //do nothing
    } else {
        //make #section-tours as target
        window.location = "#section-tour";
    }
});

document.addEventListener('scroll', function () {

    if (window.pageYOffset < 600) {
        btnTop.classList.add('btn-top-hidden');
    } else if (document.scrollTop < 600) {
        btnTop.classList.add('btn-top-hidden');
    } else {
        btnTop.classList.remove('btn-top-hidden');
    }
});
