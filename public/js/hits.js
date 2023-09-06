window.onload = function(){
    alert('Loaded succesfully');
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    const FORM = document.getElementById('hits-form')
    console.log(FORM)

    FORM.addEventListener (submit, function(event){
        event.preventDefault();
        
    let idInput = FORM ['id'].value;
    let dateInput = FORM ['date'].value;    
    let forehandInput = FORM ['forehand'].value;
    let backhandInput = FORM ['backhand'].value;
    let forehandVolleyInput = FORM ['forehandVolley'].value;
    let backhandackhandVolleyInput = FORM ['backhandVolley'].value;
    let smashInput = FORM ['smash'].value;
    let sliceInput = FORM ['slice'].value;
    let dropInput = FORM ['drop'].value;
   

})}