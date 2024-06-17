document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('authorized')) {
        window.location.href = 'login.html';
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const atletaId = urlParams.get('id');
        if (atletaId) {
            fetchAtleta(atletaId);
        } else {
            document.getElementById('atletaDetails').innerHTML = '<p>Atleta não encontrado.</p>';
        }
    }
});

function fetchAtleta(id) {
    fetch(`https://botafogo-atletas.mange.li/2024-1/${id}`)
        .then(response => response.json())
        .then(data => {
            displayAtleta(data);
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
            document.getElementById('atletaDetails').innerHTML = '<p>Erro ao carregar os detalhes do atleta.</p>';
        });
}

function displayAtleta(atleta) {
    const container = document.getElementById('atletaDetails');
    container.innerHTML = `
        <h2>${atleta.nome}</h2>
        <p>Posição: ${atleta.posicao}</p>
        <p>Idade: ${atleta.idade}</p>
        <p>Time: ${atleta.time}</p>
    `;
}
