import form from '../../utilities/scripts/form.js' ;
const LabelHandler = form.LabelHandler ;
const FormValidate = form.FormValidate ;
const formElm = document.querySelector('form#supportForm') ;
const formData = {
    elm : formElm ,
    submit: formElm.querySelector('button[type="submit"]') ,
    inputs: formElm.querySelectorAll('.validate') ,
    send: true,
    model:null 
}
new FormValidate(
    formData.elm,
    formData.submit,
    formData.inputs,
    formData.send,
    formData.modal
)
formElm.querySelectorAll('.labelHandler').forEach(label=> new LabelHandler(label)) ;