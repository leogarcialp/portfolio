/* 
The modal should open and show the description of every project
when you click the description button of the project
- Data must be taken from info object
*/

// data projects
const info = [
   {
      id: 1, 
      title: 'Portfolio',
      desc: 'My portfolio made from scratch using HTML5, CSS3 and JavaScript. My first big project.',
   },

   {
      id: 2, 
      title: 'Tipical Food Menu',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
   },

   {
      id: 3, 
      title: 'Weather App',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
   },

   {
      id: 4, 
      title: 'React JS Project',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
   },

   {
      id: 5, 
      title: 'Full Stack Project',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
   },

   {
      id: 6, 
      title: 'El Salvador culture website',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
   },
];


const modal = document.querySelector('.modal-overlay');
// const openModal = document.querySelector('.open-modal');
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close-modal');

// const mainProject = document.querySelector('main__project');

// openModal.addEventListener('click', () => {
//    modal.classList.add('open-modal');
// });

// closeModal.addEventListener('click', () => {
//    modal.classList.remove('open-modal');
// });




// Testing event target
openModal.forEach((element) => {
   element.addEventListener('click', (e) => {
      console.log(e.target);
      const modalCurrent = e.currentTarget.dataset.id;
      console.log(modalCurrent);

      const modalnfo = info.filter( (modalItem) => {
         if(modalItem.id === modalCurrent) {
            // return modalItem;
            modal.classList.add('open-modal');
         }
      });

   });
});
