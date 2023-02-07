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
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close-modal');


// loop array of info
for(let i = 0; i < info.length; i++) {
   let currentItem = info[i];

   // display array info
   let infoProject = document.createElement('div');
   infoProject.classList.add('main__project');

   infoProject.innerHTML = `<div class="main__project-img main__project-img--portfolio">
         <button class="btn-project open-modal" data-id="1">View description</button>
   </div>
   <div class="main__project-info">
      <div class="main__project-header">
         <h2 class="main__project-header-title">${currentItem.title}</h2>
      </div>
      <div class="main__project-body">
         <p>HTML - CSS - JavaScript</p>
      </div>
      <div class="main__project-footer">
         <button class="btn-project">
            <a class="btn-project__link" href="https://github.com/leogarcialp/portfolio" target="_blank">Github</a>
         </button>
         <button class="btn-project">
            <a class="btn-project__link" href="https://portfolio-leogarcialp.vercel.app/" target="_blank">Demo</a>
         </button>
      </div>
   </div> <!--.main__project-info-->
   
   <div class="modal-overlay"> 
      <div class="modal-container">
         <header>
            <h2>${currentItem.title}</h2>
         </header>
         <div class="modal-body">
         ${currentItem.desc}
         </div>
         <button class="btn-project close-modal">close modal</button>
      </div>
   </div> <!--modal-->`
   ;

   // Add Projects to the DOM
   let projectContainer = document.querySelector('.main__project-container');

   projectContainer.appendChild(infoProject);
}


// Modal open and close
openModal.forEach((element, index) => {
   element.addEventListener('click', (e) => {
      modal.classList.add('open-modal');

      console.log(`${e.target} = ${index}`);
   });
});

closeModal.addEventListener('click', () => {
   modal.classList.remove('open-modal');
});
