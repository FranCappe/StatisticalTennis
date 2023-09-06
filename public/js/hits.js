window.onload = function(){      //pantalla de carga
    alert('Loaded succesfully');
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    const FORM = document.getElementById('hits-form')
    console.log(FORM)

    //Creamos evento   

    FORM.addEventListener ("submit", function(event){
        event.preventDefault();
        console.log("test")
        let date = FORM['date'].value;    
        let Forehand = FORM ['hit-forehand'].value;
        let Backhand = FORM ['hit-backhand'].value;
        let ForehandVolley = FORM ['hit-forehand-volley'].value;
        let BackhandVolley = FORM ['hit-backhand-volley'].value;
        let Smash = FORM ['hit-smash'].value;
        let Slice = FORM ['hit-slice'].value;
        let Drop = FORM ['hit-drop'].value;
        
        
        
        //El fetch para la api de hits 

        fetch('/api/hits', {
            method: 'POST',
            body: JSON.stringify({date, Forehand, Backhand, ForehandVolley, BackhandVolley, Smash, Slice, Drop}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
})}