import FontFaceObserver from 'fontfaceobserver' ;
import Collapse from '../../utilities/scripts/collapse.js' ;
const faq = document.querySelector('#faq') ;
faq.querySelectorAll('.withCollapse').forEach((withCollapse,i,all) => {
   all = [...all] ;
   let others = all.filter(elm =>elm!=withCollapse);
   let font = new FontFaceObserver('iranSans');
   font.load().then(()=>new Collapse(withCollapse,others,null,(curr,icon,others)=>{
        curr.classList.toggle('after') ;
        icon.classList.toggle('fa-plus') ;
        icon.classList.toggle('fa-minus') ;
        others.forEach(other=>{
            other.querySelector('.collapse').classList.remove('after');
            other.querySelector('.title i').classList.remove('fa-minus') ;
            other.querySelector('.title i').classList.add('fa-plus') ;
        }) ;
   }));
})