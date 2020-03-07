import SliderMove from '../../utilities/scripts/sliderMove.js' ;
import form from '../../utilities/scripts/form.js' ;
const NumberHandler = form.NumberHandler ;
const productDetails = document.querySelector('main .row#productDetail') ;
new SliderMove(productDetails.querySelector('.sliderMove'),3000) ;
productDetails.querySelectorAll('.inputWrapper.numberHandler').forEach(numberHandler => {
   let initVal = parseFloat(numberHandler.getAttribute('data-init'));
   let changeElm = document.querySelector(`#${numberHandler.getAttribute('data-change-target')}`) ;
   let append = numberHandler.getAttribute('data-append') ;
   new NumberHandler(numberHandler,initVal,changeElm,append);
}) ;
productDetails.querySelector('form').addEventListener('submit',e=>e.preventDefault()) ;