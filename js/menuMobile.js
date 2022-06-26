/* Reciving id with vars
/*  get id burger menu */
const menu = document.getElementById('container-menu');
const close = document.getElementById('close');
const showMenu = document.getElementById('showMenuMobile');

menu.onclick = mostrarMenu;
close.onclick = hide;

function mostrarMenu(e) {
    e.preventDefault();
    menu.style.padding = '26px 26px 220vw 220vw';
    showMenu.style.display = 'flex';  
    close.style.display = 'block'; 
}   

function hide() {
    menu.style.padding = '26px 26px 52px 52px';
    close.style.display = 'none';
    showMenu.style.display = 'none';
}





