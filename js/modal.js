/* TODO: create an object with the description of projects 
similar to the Reviews project.
Existing files need to be modified

-All HTML and info will be generated with JS.

-include: ID, img, Title, Web stack used, description.

-The modal should open and show the description
when you click the img of the project
*/

const modal = document.querySelector('.modal-overlay');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
   modal.classList.add('open-modal');
});


closeModal.addEventListener('click', () => {
   modal.classList.remove('open-modal');
});