document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const hash = sha256(password);
    const demoHash = sha256('demonstracao');

    if (hash === demoHash) {
        localStorage.setItem('authorized', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Senha incorreta!');
    }
});
