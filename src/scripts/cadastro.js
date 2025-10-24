let etapaAtual = 1;
const totalEtapas = 5;
const barra = document.getElementById('progresso-barra');

function mostrarEtapa(id) {
    document.querySelectorAll('.etapa').forEach(div => div.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
    atualizarProgresso();
}

function proximaEtapa(n) {
    etapaAtual = n;
    mostrarEtapa('etapa' + n);
}

function voltarEtapa(n) {
    etapaAtual = n;
    mostrarEtapa('etapa' + n);
}

function escolherTipo() {
    const tipo = document.querySelector('input[name="tipo"]:checked');
    if (!tipo) {
        alert('Selecione um tipo de conta.');
        return;
    }
    if (tipo.value === 'cliente') {
        mostrarEtapa('etapa4_cliente');
    } else {
        mostrarEtapa('etapa4_prestador');
    }
}

function atualizarProgresso() {
    const progresso = ((etapaAtual - 1) / (totalEtapas - 1)) * 100;
    barra.style.width = progresso + '%';
}

atualizarProgresso();
