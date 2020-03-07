import timeline from '../../utilities/scripts/timeline.js' ;
import Table from '../../utilities/scripts/table.js' ;
import form from '../../utilities/scripts/form.js' ;
const Timeline = timeline.Timeline ;
const TimelineSlider = timeline.TimelineSlider ;
const Progress = timeline.Progress ;
const FormValidate = form.FormValidate ;
const LabelHandler = form.LabelHandler ;
const formElm = document.querySelector('form#orderForm') ;
const stage1 = formElm.querySelector('#stage1') ;
const stage2 = formElm.querySelector('#stage2') ;
//init timeline
const progress = new Progress(document.querySelector('#timeline'),500) ;
const timelineSlider = new TimelineSlider(document.querySelector('#timelineSlider'),progress) ;
new Timeline(document.querySelector('#timelineWrapper'),progress,timelineSlider) ;
//init table 
const table = stage1.querySelector('table') ;
const trs = table.querySelectorAll('tbody tr') ;
const totalPrice = stage1.querySelector('#totalPrice p:nth-child(2)') ;
new Table(table,trs,totalPrice) ;
//move to next slide after we confirm the basket 
stage1.querySelector('#confirmBasket').addEventListener('click',e=>{
    timelineSlider.changeSlide(parseInt(e.currentTarget.getAttribute('data-slide')));
})
//move to next slide if form is validated
//form validation 
const formData = {
    elm: formElm,
    submit: stage2.querySelector('button.changeSlide.next'),
    inputs: stage2.querySelectorAll('.validate'),
    send: false ,
    modal: null  
} 
stage2.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;
new FormValidate(
    formData.elm,
    formData.submit,
    formData.inputs,
    formData.send,
    formData.modal,
)

