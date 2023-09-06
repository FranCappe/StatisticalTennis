window.onload = function(){
    alert('Loaded succesfully');
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    const FORM = document.getElementById('hits-form')
    console.log(FORM)

    FORM.addEventListener ("submit", function(event){
        event.preventDefault();
        console.log("test")
        let dateInput = FORM['date'].value;    
        let forehandInput = FORM ['hit-forehand'].value;
        let backhandInput = FORM ['hit-backhand'].value;
        let forehandVolleyInput = FORM ['hit-forehand-volley'].value;
        let backhandackhandVolleyInput = FORM ['hit-backhand-volley'].value;
        let smashInput = FORM ['hit-smash'].value;
        let sliceInput = FORM ['hit-slice'].value;
        let dropInput = FORM ['hit-drop'].value;
        console.log({dateInput, forehandInput, backhandInput,forehandVolleyInput, backhandackhandVolleyInput, smashInput, sliceInput, dropInput})
        
        
        //El fetch para la api de hits 

        fetch("/api/hits", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
})}