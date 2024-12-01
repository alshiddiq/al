// toggle class active

const navbarNav = document.querySelector  
('.navbar-a');
// klik hamburger
document.querySelector('#hamburger').
onclick = () => {
    navbarNav.classList.toggle('active')
}

// klik diluar side bar

const hamburger = document.querySelector ('#hamburger');

document.addEventListener('click',function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains (e.target)){
       navbarNav.classList.remove('active');  
    }
});