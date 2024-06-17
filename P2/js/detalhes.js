document.addEventListener('DOMContentLoaded', async function() {
    if (localStorage.getItem('authorized') !== 'true') {
        window.location.href = 'login.html';
    }

    const urlParams = new URLSearchParams(window.location.search);
    const atletaId = urlParams.get('id');

    async function fetchAtletaDetalhes(id) {
        try {
            const response = await fetch(`https://botafogo-atletas.mange.li/2024-1/${id}`);
            if (!response.ok) {
                throw new Error('Erro ao obter detalhes do atleta');
            }
            return await response.json();
        } catch (error) {
            document.getElementById('atleta-detalhes').innerText = 'Erro ao carregar detalhes do atleta.';
            console.error(error);
        }
    }

    function renderAtdetalhesAtletas(atleta) {
        document.getElementById('atleta-detalhes').innerHTML = `
            <h1>${atleta.name}</h1>
            <p>${atleta.description}</p>
            <!-- Adicione mais detalhes conforme necessário -->
        `;
    }

    const atleta = await fetchAtdetalhesAtletas(atletaId);
    if (atleta) {
        renderAtdetalhesAtletas(atleta);
    }
});
