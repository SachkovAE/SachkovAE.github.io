$('#consult-button').on('click',(e)=>{
    e.preventDefault();
    document.getElementById('contact-form').classList.remove('hide');
})

$('#contact-form-close').on('click',(e)=>{
    e.preventDefault();
    document.getElementById('contact-form').classList.add('hide');
})
