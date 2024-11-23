import './assets/style.css'

const menu = document.querySelector('#menu') as HTMLElement;
const menuTrigger = document.querySelector('#menu-trigger') as HTMLElement;
const cross = document.querySelector('.fa-x') as HTMLElement;
const bar = document.querySelector('.fa-bars') as HTMLElement;

console.log(menuTrigger, menu);

menuTrigger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  cross.classList.toggle('hidden');
  bar.classList.toggle('hidden');
});
