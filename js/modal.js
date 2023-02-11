/* 
The modal should open and show the description of every project
when you click the description button of the project
- Data must be taken from info object
*/

// projects data
const info = [
   {
      id: 1,
      img: 'main__project-img--portfolio',
      title: 'Portfolio',
      desc: 'My portfolio made from scratch using HTML5, CSS3 and JavaScript. My first big project.',
      techUsed: 'HTML - CSS - JavaScript',
      projectCode: 'https://github.com/leogarcialp/portfolio',
      projectDemo: 'https://portfolio-leogarcialp.vercel.app/',
   },

   {
      id: 2,
      img: 'main__project-img--menu-sv',
      title: 'Tipical Food Menu',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
      techUsed: 'HTML - CSS - JavaScript',
      projectCode: 'https://github.com/leogarcialp/menu-sv',
      projectDemo: 'https://menu-sv.vercel.app/',
   },

   {
      id: 3,
      img: 'main__project-img--temporal',
      title: 'Weather App',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
      techUsed: 'HTML - CSS - JavaScript - Weather API',
      projectCode: '#',
      projectDemo: '#',
   },

   {
      id: 4,
      img: 'main__project-img--temporal',
      title: 'React JS Project',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
      techUsed: 'HTML - CSS - Tailwind - React JS',
      projectCode: '#',
      projectDemo: '#',
   },

   {
      id: 5,
      img: 'main__project-img--temporal',
      title: 'Full Stack Project',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
      techUsed: 'HTML - CSS - Tailwind - React JS - Node JS',
      projectCode: '#',
      projectDemo: '#',
   },

   {
      id: 6,
      img: 'main__project-img--temporal',
      title: 'El Salvador culture website',
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
      techUsed: 'idk yet',
      projectCode: '#',
      projectDemo: '#',
   },
];


// loop array of info
for(let i = 0; i < info.length; i++) {
   let currentItem = info[i];

   // display array info
   let infoProject = document.createElement('div');
   infoProject.classList.add('main__project');

   infoProject.innerHTML = `<div class="main__project-img ${currentItem.img}">
         <button class="btn-project open-modal-btn">View description</button>
   </div>
   <div class="main__project-info">
      <div class="main__project-header">
         <h2 class="main__project-header-title">${currentItem.title}</h2>
      </div>
      <div class="main__project-body">
         <p>${currentItem.techUsed}</p>
      </div>
      <div class="main__project-footer">
         <button class="btn-project">
            <a class="btn-project__link" href="${currentItem.projectCode}" target="_blank">Github</a>
         </button>
         <button class="btn-project">
            <a class="btn-project__link" href="${currentItem.projectDemo}" target="_blank">Demo</a>
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


// Open and close modal
const modal = document.querySelectorAll('.modal-overlay');
const openModalBtn = document.querySelectorAll('.open-modal-btn');
const closeModalBtn = document.querySelectorAll('.close-modal');


openModalBtn.forEach((element, index) => {
   element.addEventListener('click', (e) => {
      modal[index].classList.add('modal');
   });   
});

closeModalBtn.forEach((element, index) => {
   element.addEventListener('click', (e) => {
      modal[index].classList.remove('modal'); 
   });   
});