const btnSend = document.querySelector('.contact__submit');

// disable Send button
btnSend.disabled = true;
btnSend.classList.add('cursor-not-allowed', 'opacity-50', 'bg-blue-500');

// Validate form fields




document.querySelector('.contact__form').addEventListener('submit', function(event) {
   event.preventDefault();

   btnSend.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_hpfiyhf';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
         btnSend.value = 'Send Message';
         alert('Email Sent!');
      }, (err) => {
         btnSend.value = 'Send Message';
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


/*
logic proposal:

- Disable send Message button at the beginning.  Use → (DOMContentLoaded) 
- Validate fields and then enable SendMessage button
- Design/adapt error messages according to the page
*/
