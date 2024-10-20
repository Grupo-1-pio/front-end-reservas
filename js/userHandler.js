// Seleccionar los formularios
const registerForm = document.querySelector('.form-register');
const loginForm = document.querySelector('.form-login');

// Función para manejar el registro
function handleRegister(e) {
    e.preventDefault();
    const userName = registerForm.querySelector('input[name="userName"]').value;
    const userEmail = registerForm.querySelector('input[name="userEmail"]').value;
    const userPassword = registerForm.querySelector('input[name="userPassword"]').value;

    if (userName && userEmail && userPassword) {
        // Guardar en localStorage
        localStorage.setItem('user', JSON.stringify({ userName, userEmail, userPassword }));
        registerForm.reset();
    }
}

// Función para manejar el inicio de sesión
function handleLogin(e) {
    e.preventDefault();
    const userEmail = loginForm.querySelector('input[name="userEmail"]').value;
    const userPassword = loginForm.querySelector('input[name="userPassword"]').value;

    if (userEmail && userPassword) {
        // Obtener usuario del localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.userEmail === userEmail && user.userPassword === userPassword) {
            loginForm.reset();
            // Redirigir al usuario a la página del dashboard inmediatamente
            window.location.href = '../views/index.html';
        }
    }
}

// Agregar event listeners
registerForm.addEventListener('submit', handleRegister);
loginForm.addEventListener('submit', handleLogin);

// Cambiar entre formularios
document.getElementById('sign-in').addEventListener('click', () => {
    document.querySelector('.register').classList.add('hide');
    document.querySelector('.login').classList.remove('hide');
});

document.getElementById('sign-up').addEventListener('click', () => {
    document.querySelector('.login').classList.add('hide');
    document.querySelector('.register').classList.remove('hide');
});