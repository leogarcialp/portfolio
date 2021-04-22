const toggle = document.getElementsByClassName('header__toggle')[0];
const navbarLinks = document.getElementsByClassName('header__links-container')[0];

toggle.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
});