document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se l'account esiste nel localStorage
    const storedUser = localStorage.getItem(username);

    if (storedUser && JSON.parse(storedUser).password === password) {
        alert('Accesso riuscito! Benvenuto nella home page.');
        // Reindirizza l'utente a un'altra pagina
        window.location.href = 'home.html';
    } else {
        alert('Credenziali non valide. Per favore, registrati.');
    }
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Verifica se l'account esiste nel localStorage
    const storedUser = localStorage.getItem(newUsername);

    if (storedUser) {
        alert('Questo username è già stato utilizzato. Scegli un altro username.');
    } else {
        // Salva le informazioni dell'account nel localStorage
        localStorage.setItem(newUsername, JSON.stringify({ password: newPassword }));
        alert('Registrazione riuscita! Ora puoi accedere con il tuo nuovo account.');
        showLoginForm(); // Mostra il modulo di accesso dopo la registrazione
    }
});

function showSignupForm() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('signupFormContainer').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('signupFormContainer').style.display = 'none';
}
