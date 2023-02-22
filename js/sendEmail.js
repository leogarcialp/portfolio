const btn = document.querySelector('.contact__submit');

document.querySelector('.contact__form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_hpfiyhf';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
         btn.value = 'Send Message';
         alert('Email Sent!');
      }, (err) => {
         btn.value = 'Send Message';
         alert(JSON.stringify(err));
      }
   );
});


/*TODO: 
- install Tailwind
- Disable send message button ❌
- validate the form fields
- Enable send message button ✅
- hardest part would be showing the error messages below the form (I have to
   create and design new CSS elements 💡👀)
- Clean/reset fields when message sent  

*/
