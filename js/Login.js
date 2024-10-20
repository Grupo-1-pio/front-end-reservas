class LoginForm {
    constructor() {
        this.users = [
            { username: 'usuario1', password: 'password1', role: 'user' },
            { username: 'admin1', password: 'admin123', role: 'admin' },
            { username: 'trabajador1', password: 'worker123', role: 'worker' }
        ];
        this.form = document.getElementById("loginForm");
        this.messageElement = document.getElementById("message");
        this.passwordInput = document.getElementById("password");
        this.togglePasswordButton = document.getElementById("togglePassword");

        this.form.addEventListener("submit", this.handleSubmit.bind(this));
        this.togglePasswordButton.addEventListener("click", this.togglePasswordVisibility.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();
        const username = this.form.username.value;
        const password = this.form.password.value;
        const role = this.form.role.value;

        this.clearMessages();

        if (!this.validateInputs(username, password, role)) return;

        this.simulateLogin(username, password, role)
            .then(user => {
                this.showLoadingMessage(); // Mostrar mensaje de carga
                setTimeout(() => {
                    alert(`Bienvenido ${user.role}: ${username}`);
                    location.href = `index.html`; // Redireccionar a index.html para todos los roles
                }, 1000); // Tiempo de espera de 1 segundo antes de redirigir
            })
            .catch(error => {
                this.displayMessage(error);
            });
    }

    validateInputs(username, password, role) {
        if (!username || !password || !role) {
            this.displayMessage('Por favor, completa todos los campos.');
            return false;
        }

        if (password.length < 8) {
            this.displayMessage('La contraseña debe tener al menos 8 caracteres.');
            return false;
        }

        return true;
    }

    async simulateLogin(username, password, role) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.users.find(user =>
                    user.username === username &&
                    user.password === password &&
                    user.role === role
                );

                if (user) {
                    resolve(user);
                } else {
                    reject('Credenciales inválidas. Por favor, intenta de nuevo.');
                }
            }, 1000); // Simulando tiempo de respuesta
        });
    }

    showLoadingMessage() {
        this.messageElement.textContent = 'Cargando...'; // Mostrar mensaje de carga
        this.messageElement.classList.add('fade-in'); // Añadir clase para animación
    }

    togglePasswordVisibility() {
        const type = this.passwordInput.type === "password" ? "text" : "password";
        this.passwordInput.type = type;
        this.togglePasswordButton.textContent = type === "password" ? "Mostrar" : "Ocultar";
    }

    displayMessage(message) {
        this.messageElement.textContent = message;
        this.messageElement.classList.add('fade-in'); // Añadir clase para animación
    }

    clearMessages() {
        this.messageElement.textContent = '';
        this.messageElement.classList.remove('fade-in');
    }
}

new LoginForm();
