// skills data
const skillsArray = [
   {
      id: 1,
      svgCode: 'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />',
      skillName: 'HTML',
   },
   {
      id: 2,
      svgCode: 'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />',
      skillName: 'CSS',
   },
   {
      id: 3,
      svgCode: 'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />',
      skillName: 'JAVASCRIPT',
   },
   {
      id: 4,
      svgCode: 'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-bootstrap" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />',
      skillName: 'BOOTSTRAP',
   },
   {
      id: 5,
      svgCode: 'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tailwind" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />',
      skillName: 'TAILWIND',
   },
   {
      id: 6,
      svgCode: 'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-fork" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="18" r="2" /><circle cx="7" cy="6" r="2" /><circle cx="17" cy="6" r="2" /><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" /><line x1="12" y1="12" x2="12" y2="16" />',
      skillName: 'GIT',
   },
   {
      id: 7,
      svgCode: 'xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-figma" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="15" cy="12" r="3" /><rect x="6" y="3" width="12" height="6" rx="3" /><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />',
      skillName: 'FIGMA',
   },
];


// loop array of skills
for(let i = 0; i < skillsArray.length; i++) {
   let currentItem = skillsArray[i];

   // display skillsArray info
   let skillInfo = document.createElement('div');
   skillInfo.classList.add('skill');

   skillInfo.innerHTML = `<svg ${currentItem.svgCode}</svg>
   <p class="skills__name">${currentItem.skillName}</p>`
   ;

   // Add skills to the DOM
   let skillsContainer = document.querySelector('.skills__container');
   skillsContainer.appendChild(skillInfo);
}