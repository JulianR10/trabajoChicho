document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName: email, pass: password })
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Login exitoso:', result);
            localStorage.setItem('user', JSON.stringify(result));
            window.location.href = '../index.html';
        } else {
            console.log('Error en el login:', result);
            alert('Credenciales incorrectas, por favor intenta de nuevo.');
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        alert('Hubo un error al intentar iniciar sesión. Por favor, intenta de nuevo más tarde.');
    }
});

