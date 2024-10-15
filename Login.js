class LoginForm {
    // Constructor de la clase LoginForm
    constructor() {
        // Lista de usuarios simulados con sus credenciales y roles
        this.users = [
            { username: 'usuario1', password: 'pass1', role: 'user' },
            { username: 'admin1', password: 'admin', role: 'admin' },
            { username: 'trabajador1', password: 'worker', role: 'worker' }
        ];

        // Obtiene el formulario de inicio de sesión del DOM por su ID
        this.form = document.getElementById("loginForm");
        // Obtiene el elemento donde se mostrarán los mensajes del formulario
        this.messageElement = document.getElementById("message");
        // Obtiene el campo de entrada de contraseña del DOM
        this.passwordInput = document.getElementById("password");
        // Obtiene el botón para mostrar/ocultar la contraseña
        this.togglePasswordButton = document.getElementById("togglePassword");

        // Añade un evento al formulario para manejar el envío
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
        // Añade un evento al botón para alternar la visibilidad de la contraseña
        this.togglePasswordButton.addEventListener("click", this.togglePasswordVisibility.bind(this));
    }

    // Maneja el evento de envío del formulario
    handleSubmit(event) {
        // Previene el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();
        // Obtiene el nombre de usuario ingresado
        const username = this.form.username.value;
        // Obtiene la contraseña ingresada
        const password = this.form.password.value;
        // Obtiene el rol seleccionado en el formulario
        const role = this.form.role.value;

        // Limpia los mensajes anteriores
        this.clearMessages();

        // Valida los campos de entrada
        if (!this.validateInputs(username, password, role)) return;

        // Simula el inicio de sesión
        this.simulateLogin(username, password, role)
            .then(user => {
                // Muestra un mensaje de bienvenida al usuario
                alert(`Bienvenido ${user.role}: ${username}`);
                // Redireccionar según el rol del usuario (comentado)
                // location.href = `dashboard_${user.role}.html`;
            })
            .catch(error => {
                // Muestra un mensaje de error si las credenciales son inválidas
                this.displayMessage(error);
            });
    }

    // Valida los campos de entrada del formulario
    validateInputs(username, password, role) {
        // Verifica si algún campo está vacío
        if (!username || !password || !role) {
            // Muestra un mensaje si hay campos vacíos
            this.displayMessage('Por favor, completa todos los campos.');
            return false; // Retorna falso si la validación falla
        }

        // Verifica la longitud de la contraseña
        if (password.length < 6) {
            // Muestra un mensaje si la contraseña es demasiado corta
            this.displayMessage('La contraseña debe tener al menos 6 caracteres.');
            return false; // Retorna falso si la validación falla
        }

        return true; // Retorna verdadero si todas las validaciones son exitosas
    }

    // Simula el proceso de inicio de sesión
    async simulateLogin(username, password, role) {
        return new Promise((resolve, reject) => {
            // Simula un retardo para imitar una llamada a un servidor
            setTimeout(() => {
                // Busca un usuario que coincida con las credenciales proporcionadas
                const user = this.users.find(user =>
                    user.username === username &&
                    user.password === password &&
                    user.role === role
                );

                // Si se encuentra un usuario válido, resuelve la promesa
                if (user) {
                    resolve(user);
                } else {
                    // Si no se encuentra un usuario, rechaza la promesa
                    reject('Credenciales inválidas. Por favor, intenta de nuevo.');
                }
            }, 1000); // 1 segundo de espera simulada
        });
    }

    // Alterna la visibilidad de la contraseña en el campo de entrada
    togglePasswordVisibility() {
        // Cambia el tipo de entrada entre 'password' y 'text'
        const type = this.passwordInput.type === "password" ? "text" : "password";
        this.passwordInput.type = type; // Actualiza el tipo del input
        // Cambia el texto del botón según el estado actual de la contraseña
        this.togglePasswordButton.textContent = type === "password" ? "Mostrar" : "Ocultar";
    }

    // Muestra un mensaje en el elemento designado para mensajes
    displayMessage(message) {
        this.messageElement.textContent = message; // Establece el texto del mensaje
        this.messageElement.classList.add('fade-in'); // Añade clase para animación
    }

    // Limpia los mensajes mostrados en el formulario
    clearMessages() {
        this.messageElement.textContent = ''; // Limpia el texto del mensaje
        this.messageElement.classList.remove('fade-in'); // Remueve la clase de animación
    }
}

// Crea una nueva instancia de la clase LoginForm
new LoginForm();
