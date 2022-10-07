const scrollBtn = document.querySelector('.top-link');
const scrollCount = document.querySelector('#home');


window.addEventListener('scroll', () => {
   const location = scrollCount.getBoundingClientRect();
   console.log(location);

   if(location.top < -800){
     scrollBtn.classList.add('show-link');
   } else {
      scrollBtn.classList.remove('show-link');
   }
});