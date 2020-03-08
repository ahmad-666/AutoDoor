const menuToggle = document.querySelector('#menuToggle') ;
const menu = document.querySelector('aside') ;
const blackFilter = document.querySelector('#blackFilter') ;
menuToggle.addEventListener('click',toggleMenu) ;
function toggleMenu(e){
    e.stopPropagation();
    menuToggle.classList.toggle('move') ;
    menu.classList.toggle('show') ;
    blackFilter.classList.toggle('show') ;
    if(menu.classList.contains('show')) document.addEventListener('click',menuDocHandler) ;
    else document.removeEventListener('click',menuDocHandler) ;
}
function menuDocHandler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!menu.contains(clickedElm)){
        menuToggle.classList.remove('move') ;
        menu.classList.remove('show') ;
        blackFilter.classList.remove('show') ;
        document.removeEventListener('click',menuDocHandler) ;
    }
}