window.onload = function(){      //pantalla de carga
    alert('Loaded succesfully');
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    const FORM = document.getElementById('hits-form')
    console.log(FORM)

    //Creamos evento   

    FORM.addEventListener ("submit", function(event){
        event.preventDefault();
        let date = FORM['date'].value;    
        let forehand = FORM ['hit-forehand'].value;
        let backhand = FORM ['hit-backhand'].value;
        let forehandVolley = FORM ['hit-forehand-volley'].value;
        let backhandVolley = FORM ['hit-backhand-volley'].value;
        let smash = FORM ['hit-smash'].value;
        let slice = FORM ['hit-slice'].value;
        let drop = FORM ['hit-drop'].value;
        
        
        
        //El fetch para la api de hits 

        fetch('/api/hits', {
            method: 'POST',
            body: JSON.stringify({date, forehand, backhand, forehandVolley, backhandVolley, smash, slice, drop}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
         
})}