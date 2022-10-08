const scrollBtn = document.querySelector('.top-link');
const scrollCount = document.querySelector('#home');


window.addEventListener('scroll', () => {
   const location = scrollCount.getBoundingClientRect();

   if(location.top < -800){
     scrollBtn.classList.add('show-link');
   } else {
      scrollBtn.classList.remove('show-link');
   }
});