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
Validar el envio del email cuando los 3 campos
sean correctos

- Boton de enviar DISABLED y opacidad 50 (hacerlo en el HTML)
- Nombre NO debe estar vacio
- Email NO debe estare vacio y debe ser formato email
- Mensaje NO debe estar vacio
- ACTIVAR BOTON DE ENVIO
- Limpiar campos
*/

// Logic based on a project

document.addEventListener('DOMContentLoaded', () => {
   // Object to evaluate all fields
   const infoInputs = {
      name: '',
      email: '',
      message: ''
   };

   // Elements
   const inputName = document.querySelector('#name');
   const inputEmail = document.querySelector('#email');
   const inputMessage = document.querySelector('#message');
   const btnSend = document.querySelector('.contact__submit');
   const form = document.querySelector('.contact__form');

   // Events
   inputName.addEventListener('blur', validate);
   inputEmail.addEventListener('blur', validate);
   inputMessage.addEventListener('blur', validate);
   
   // Send email event
   form.addEventListener('submit', function(event) {
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



   // Functions
   function validate(e) {
      if(e.target.value.trim() === '') {
         showAlert(`The field ${e.target.id} is required`, e.target.parentElement);
         infoInputs[e.target.name] = '';
         verifyAllFields();
         return;
      }

      if(e.target.id === 'email' && !validateEmail(e.target.value)) {
         showAlert('The email is not valid', e.target.parentElement);
         infoInputs[e.target.name] = '';
         verifyAllFields();
         return;
      }

      removeAlert(e.target.parentElement);

      // Mapping inputs information to the object 
      infoInputs[e.target.name] = e.target.value.trim().toLowerCase();

      verifyAllFields();
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

   function verifyAllFields() {
      console.log(infoInputs);

      if(Object.values(infoInputs).includes('')) {
         btnSend.classList.add('opacity-50', 'cursor-not-allowed');
         btnSend.classList.remove('cursor-pointer');
         btnSend.disabled = true;
      } else {
         btnSend.classList.remove('opacity-50', 'cursor-not-allowed');
         btnSend.classList.add('cursor-pointer');
         btnSend.disabled = false;
      }
   }
});