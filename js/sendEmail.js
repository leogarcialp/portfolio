// const btnSend = document.querySelector('.contact__submit');

// // disable Send button
// btnSend.disabled = true;
// btnSend.classList.add('cursor-not-allowed', 'opacity-50', 'bg-blue-500');

// // Validate form fields




// document.querySelector('.contact__form').addEventListener('submit', function(event) {
//    event.preventDefault();

//    btnSend.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_hpfiyhf';

//    emailjs.sendForm(serviceID, templateID, this)
//    .then(() => {
//          btnSend.value = 'Send Message';
//          alert('Email Sent!');
//       }, (err) => {
//          btnSend.value = 'Send Message';
//          alert(JSON.stringify(err));
//       }
//    );
// });


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


// Logic based on a project

document.addEventListener('DOMContentLoaded', () => {
   // Elements
   inputName = document.querySelector('#name');
   inputEmail = document.querySelector('#email');
   inputMessage = document.querySelector('#message');

   // Events
   inputName.addEventListener('blur', validate);
   inputEmail.addEventListener('blur', validate);
   inputMessage.addEventListener('blur', validate);

   // Functions
   function validate(e) {
      if(e.target.value.trim() === '') {
         showAlert(`The field ${e.target.id} is required`, e.target.parentElement);
         return;
      }

      if(e.target.id === 'email' && !validateEmail(e.target.value)) {
         showAlert('The email is not valid', e.target.parentElement);
         return;
      }

      removeAlert(e.target.parentElement);
   }

   function showAlert(message, reference) {
      removeAlert(reference);

      // Generate alert
      const error = document.createElement('P');
      error.textContent = message;
      error.classList.add('bg-alert', 'p-alert', 'text-center-alert');

      // Show created element in the HTML
      reference.appendChild(error);
   }

   function removeAlert(reference) {
      // Check if an alert already exists
      const alert = reference.querySelector('.bg-alert'); //take a class as reference

      if(alert) {
         alert.remove();
      }
   }

   function validateEmail(email) {
      const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      const result = regex.test(email);

      return result;
   }
});