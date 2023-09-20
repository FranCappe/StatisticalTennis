window.onload = function(){
    alert('Loaded succesfully');
    $('#onload').fadeOut();
    $('body').removeClass('hidden')


    const FormularioError = document.getElementById('FormularioError')
    console.log(FormularioError)

    FormularioError.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = FormularioError ['date'].value;
            const doubleFault = FormularioError ['double-fault']
            const errorsUnforcered = FormularioError ['unforced-errors']
        console.log({date, doubleFault, errorsUnforcered})

    fetch('/api/errors', {
        method: 'POST',
        body: JSON.stringify(date, doubleFault, errorsUnforcered),
        headers: {
            'Content-Type': 'application/json'
        }
    })

   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))

})}; 
