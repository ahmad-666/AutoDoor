let searchForm = document.querySelector('form#searchForm') ;
let productsList = searchForm.querySelector('.productsWrapper') ;
let productsListTrigger = productsList.querySelector('.title') ;
let productsCategories = productsList.querySelector('.categories') ;
productsListTrigger.addEventListener('click',toggleProductsList) ;
function toggleProductsList(e){
    e.stopPropagation();
    productsCategories.classList.toggle('show') ;
    if(productsCategories.classList.contains('show')) document.addEventListener('click',productsDocHandler) ;
    else document.removeEventListener('click',productsDocHandler) ;
}
function productsDocHandler(e){
    e.stopPropagation();
    let clickedElm = e.target ;
    if(!productsList.contains(clickedElm)){
        productsCategories.classList.remove('show') ;
        document.removeEventListener('click',productsDocHandler) ;
    }
}