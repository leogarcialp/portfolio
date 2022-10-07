const scrollBtn = document.querySelector('.top-link');


window.addEventListener('scroll', () => {
  const location = scrollBtn.getBoundingClientRect();

   console.log(location);

   if(location.top < -725){
     scrollBtn.classList.add('show-link');
   } else {
      scrollBtn.classList.remove('show-link');
   }
});