const toggle = document.getElementsByClassName('header__toggle')[0];
const navbarLinks = document.getElementsByClassName('header__links-container')[0];

toggle.addEventListener('click', () => navbarLinks.classList.toggle('active'));



// Change color name after 3 seconds
setTimeout(() => {
   document.getElementById('name-short').style.color = '#ff9999';
}, 3000);



// Dynamic year (Footer)
document.getElementById("year").innerHTML = new Date().getFullYear();