const navLinks = Array.from(document.querySelectorAll('.navigation__link')); // nav links
const navCheck = document.getElementById('nav-toggle'); // nav checkbox
const popup = document.getElementById('popup'); // popup
const btnTop = document.querySelector('.btn-top'); // button to top

//Add event listener to each nav link
navLinks.forEach(cur => {
    //On click uncheck nav checkbox
    cur.addEventListener('click', () => navCheck.checked = false);
});

//Close popup when clicked outside
popup.addEventListener('click', event => {
    let className;
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

    if (window.pageYOffset && window.pageYOffset < 600) {
        btnTop.classList.add('btn-top-hidden');
    } else if(document.documentElement.scrollTop && document.documentElement.scrollTop < 600) {
        btnTop.classList.add('btn-top-hidden');
    } else {
        btnTop.classList.remove('btn-top-hidden');
    }
});