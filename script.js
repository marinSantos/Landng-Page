//Configuração do botão hamburguer
const btnMobile = document.getElementById('botao-mobile');


function toggleMenu() {
  nav.classList.toggle('active');
  gray.classList.toggle('acitive');
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('toachstart', toggleMenu);


//Configuração do menu da opção Features
const menuA = document.getElementById('mini-menu-1');


function miniMenuA() {

  menu.classList.toggle('openA');
}
menuA.addEventListener('click', miniMenuA);
menuA.addEventListener('toachstart', miniMenuA);

//Configuração do menu da opção Company
const menuB = document.getElementById('mini-menu-2');


function miniMenuB() {
  menu.classList.toggle('openB');
}
menuB.addEventListener('click', miniMenuB);
menuB.addEventListener('toachstart', miniMenuB);
