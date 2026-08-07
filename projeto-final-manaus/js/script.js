// 1. ARRAY DE OBJETOS - Requisito do professor
const pontosTuristicos = [
    {
        id: 1,
        nome: "Teatro Amazonas",
        categoria: "historico",
        descricao: "Um dos cartões postais do Brasil, inaugurado em 1896.",
        imagem: "img/teatro-amazonas.jpg"
    },
    {
        id: 2,
        nome: "Encontro das Águas",
        categoria: "natureza",
        descricao: "Fenômeno onde os rios Negro e Solimões correm lado a lado.",
        imagem: "img/encontro-das-aguas.jpg"
    },
    {
        id: 3,
        nome: "Mercado Adolpho Lisboa",
        categoria: "historico",
        descricao: "Mercado público histórico com arquitetura de ferro.",
        imagem: "img/mercado-adolpho-lisboa.jpg"
    }
];

// 2. FUNÇÃO PRA GERAR CARDS COM TEMPLATE LITERAL - Requisito do professor
function mostrarPontos(lista) {
    const container = document.getElementById('lista-pontos') || document.getElementById('cards-destaque');
    if (!container) return;

    container.innerHTML = ''; // Limpa antes

    // 3. MÉTODO DE ARRAY .map() - Requisito do professor
    lista.map(ponto => {
        // 4. TEMPLATE LITERAL - Requisito do professor
        container.innerHTML += `
            <div class="card">
                <img src="${ponto.imagem}" alt="${ponto.nome}" loading="lazy">
                <h3>${ponto.nome}</h3>
                <p>${ponto.descricao}</p>
            </div>
        `;
    });
}

// 5. FUNÇÃO COM BRANCH CONDICIONAL E LOCALSTORAGE - Requisito do professor
function filtrarPontos(categoria) {
    let pontosFiltrados;

    // BRANCH CONDICIONAL if/else
    if (categoria === 'todos') {
        pontosFiltrados = pontosTuristicos;
    } else {
        // MÉTODO DE ARRAY .filter()
        pontosFiltrados = pontosTuristicos.filter(ponto => ponto.categoria === categoria);
    }
    
    // LOCALSTORAGE
    localStorage.setItem('ultimoFiltro', categoria);
    
    mostrarPontos(pontosFiltrados);
}

// Carregar quando a página abrir
document.addEventListener('DOMContentLoaded', () => {
    const filtroSalvo = localStorage.getItem('ultimoFiltro') || 'todos';
    mostrarPontos(pontosTuristicos.slice(0, 3)); // Mostra 3 na home
    if(document.getElementById('lista-pontos')){
        filtrarPontos(filtroSalvo); // Mostra todos com filtro na pagina pontos
    }
});

// Validação do formulário - Interação DOM
const form = document.getElementById('form-contato');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault(); // não recarrega a página
        
        const nome = document.getElementById('nome').value;
        
        // Salva no localStorage
        localStorage.setItem('ultimoNome', nome);
        
        document.getElementById('mensagem-sucesso').innerText = `Obrigado, ${nome}! Recebemos sua mensagem.`;
        form.reset();
    });
}