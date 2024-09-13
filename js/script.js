// toogle class active
const navbarNav = document.querySelector ('.navbar-nav');

// ketika menu di klik
document.querySelector('#strip-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// klik di luar sidebar untuk menghilangkan nav
const strip = document.querySelector('#strip-menu');

document.addEventListener('click', function(e) {
    if(!strip.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})