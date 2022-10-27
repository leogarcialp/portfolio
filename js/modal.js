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
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

// const mainProject = document.querySelector('main__project');

openModal.addEventListener('click', () => {
   modal.classList.add('open-modal');
});

closeModal.addEventListener('click', () => {
   modal.classList.remove('open-modal');
});

// Events to make it dynamic
// window.addEventListener('DOMContentLoaded', () => {
//    displayModalInfo(info);
// });

// Function
// function displayModalInfo(modalInfo) {
//    let displayModal = modalInfo.map((item) => {
//       return `<div class="modal-overlay"> 
//          <div class="modal-container">
//             <header>
//                <h2>${info.title}</h2>
//             </header>
//             <div class="modal-body">
//                ${info.desc}
//             </div>
//                <button class="btn-project close-modal">close modal</button>
//          </div>
//       </div>`;
//    });

//    displayModal = displayModal.join("");
//    mainProject.innerHTML(displayModal); 
// }


      //   ------------------- TEST --------------------------
// const openModal = document.querySelectorAll('.open-modal');

// openModal.forEach((element) => {
//    element.addEventListener('click', (e) => {
//       if(e.target.dataset.id === info.id) {
//          document.createElement = `
//          <div class="modal-overlay"> 
//             <div class="modal-container">
//                <header>
//                   <h2>${info.title}</h2>
//                </header>
//                <div class="modal-body">
//                   ${info.desc}
//                </div>
//                   <button class="btn-project close-modal">close modal</button>
//             </div>
//          </div>`;
//       }
//    });
// });

// ----------------------------------------------------------------- ORIGINAL
// openModal.addEventListener('click', (e) => {
//    modal.classList.add('open-modal');

//    if(e.target.dataset.id === info.id) {
//       document.createElement = `
//       <div class="modal-overlay"> 
//          <div class="modal-container">
//             <header>
//                <h2>${info.title}</h2>
//             </header>
//             <div class="modal-body">
//                ${info.desc}
//             </div>
//             <button class="btn-project close-modal">close modal</button>
//          </div>
//       </div>`;
//    }
// });
