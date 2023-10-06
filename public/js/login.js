window.onload = function(){
    setTimeout(function(){
        $('#onload').fadeOut();
        $('body').removeClass('hidden')
    }, 1000);
    

    fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Puedes obtener los datos del formulario
      })
      .then(response => response.json())
      .then(data => {
        // Verificar la respuesta del servidor
        if (data.token) {
          // Redirigir al usuario después del inicio de sesión exitoso
          window.location.href = '/login.html';
        } else {
          // Mostrar un mensaje de error al usuario si el inicio de sesión falla
          console.error('Inicio de sesión fallido:', data.error);
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });

}