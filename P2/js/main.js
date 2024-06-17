document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('authorized')) {
        window.location.href = 'login.html';
    } else {
        fetchElenco('https://botafogo-atletas.mange.li/2024-1/all');
    }
});

function fetchElenco(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayElenco(data);
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });
}

function displayElenco(elenco) {
    const container = document.getElementById('elencoContainer');
    container.innerHTML = '';
    elenco.forEach(atleta => {
        const card = document.createElement('div');
        card.className = 'atleta-card';
        card.innerHTML = `
            <h3>${atleta.nome}</h3>
            <p>${atleta.posicao}</p>
            <a href="atleta.html?id=${atleta.id}">Ver detalhes</a>
        `;
        container.appendChild(card);
    });
}

function filterElenco(tipo) {
    let url;
    if (tipo === 'masculino') {
        url = 'https://botafogo-atletas.mange.li/2024-1/masculino';
    } else if (tipo === 'feminino') {
        url = 'https://botafogo-atletas.mange.li/2024-1/feminino';
    } else {
        url = 'https://botafogo-atletas.mange.li/2024-1/all';
    }
    fetchElenco(url);
}
