const { response } = ('express');

const formulario = document.getElementById('registro');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');


formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = usernameInput.value
            const password = passwordInput.value
            const email = emailInput.value
            const body = {username, password, email};



    fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })

   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))
}); 
