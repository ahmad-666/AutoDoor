import ProductSlider from '../../utilities/scripts/productSlider.js' ;
const projs = document.querySelectorAll('#projs .projs .proj') ;
projs.forEach(proj=> new ProductSlider(proj.querySelector('.productSlider'))) ;