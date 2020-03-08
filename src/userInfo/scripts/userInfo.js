// import $ from 'jquery' ;
// import select2 from 'select2' ;
import form from '../../utilities/scripts/form.js' ;
const FormValidate = form.FormValidate ;
const LabelHandler = form.LabelHandler ;
// const Select2Validate = form.Select2Validate ;
const formElm = document.querySelector('form#userInfo') ;
const formData = {
    elm: formElm,
    submit: formElm.querySelector('button[type="submit"]'),
    inputs: formElm.querySelectorAll('.validate'),
    send: true,
    modal: null,
    labels: formElm.querySelectorAll('.labelHandler') 
}
formData.labels.forEach(label=>new LabelHandler(label)) ;
new FormValidate(
    formData.elm,
    formData.submit,
    formData.inputs,
    formData.send,
    formData.modal,
)
// $('.select2#state').select2({
//     placeholder: 'استان خود را  انتخاب کنید'
// });
// $('.select2#city').select2({
//     placeholder: 'شهر خود را  انتخاب کنید'
// });
// new Select2Validate(
//     formData.elm,
//     formData.submit
// )