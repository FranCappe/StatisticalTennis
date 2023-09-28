window.onload = function(){
    alert('Loaded succesfully')
    $('#onload').fadeOut();
    $('body').removeClass('hidden')
}

const FORM = document.getElementById('service-form')
    console.log(FORM)
FORM.addEventListener ("submit", function(event){
    event.preventDefault();
    let date = FORM['date'].value; 
    let firstServe = FORM['service-first-serve'].value;
    let secondServe = FORM['service-second-serve'].value;    

    console.log ({date, firstServe, secondServe})
    
    
    //El fetch para la api de service

    fetch('/api/service', {
        method: 'POST',
        body: JSON.stringify({date, firstServe, secondServe}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))

})