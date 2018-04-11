$(document).ready(()=> {
 $('.container .closeBTN').click(()=>{
     $('.container').slideUp('0.4s')
     $('.container').hide('0.4s'); 
 }) 

 $('.BTN').click(()=>{
     $('.container').slideToggle(); 
 }) 
    
})