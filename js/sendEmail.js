const btn = document.querySelector('.contact__submit');

document.querySelector('.contact__form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_hpfiyhf';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
         btn.value = 'Send Email';
         alert('Email Sent!');
      }, (err) => {
         btn.value = 'Send Message';
         alert(JSON.stringify(err));
      }
   );
});