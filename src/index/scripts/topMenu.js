let topMenu = document.querySelector('header #topMenu') ;
let mobileMenu = topMenu.querySelector('#mobileMenu ul')
let mobileMenuTrigger = topMenu.querySelector('#mobileMenu .fa-bars') ;
mobileMenuTrigger.addEventListener('click',toggleMobileMenu) ;
function toggleMobileMenu(e){
    e.stopPropagation();
    mobileMenu.classList.toggle('show') ;
    if(mobileMenu.classList.contains('show')) document.addEventListener('click',mobileDocHandler) ;
    else document.removeEventListener('click',mobileDocHandler) ;
}
function mobileDocHandler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!mobileMenu.contains(clickedElm)) {
        mobileMenu.classList.remove('show') ;
        document.removeEventListener('click',mobileDocHandler) ;
    }
}
