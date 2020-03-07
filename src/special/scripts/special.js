import form from '../../utilities/scripts/form.js' ;
const FormValidate = form.FormValidate ;
const LabelHandler = form.LabelHandler ;
const Select = form.Select ;
const formElm = document.querySelector('form#specialForm') ;
const formData = {
    elm: formElm,
    submit: formElm.querySelector('button[type="submit"]'),
    inputs: formElm.querySelectorAll('.validate'),
    send: true ,
    modal: null  
}
formElm.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;
new FormValidate(
    formData.elm,
    formData.submit,
    formData.inputs,
    formData.send,
    formData.modal
)
let selects = formElm.querySelectorAll('.inputWrapper.select') ;
selects = [...selects] ;
selects.forEach(select => {
    let otherSelects = selects.filter(other => select!=other) ;
    new Select(select,otherSelects) ;
})