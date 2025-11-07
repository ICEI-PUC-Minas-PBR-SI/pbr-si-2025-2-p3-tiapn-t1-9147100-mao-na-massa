document.addEventListener("DOMContentLoaded", () => {
    const etapas = document.querySelectorAll(".etapa");
    const lista = document.getElementById("lista-profissionais");
    const detalhes = document.getElementById("detalhes-profissional");

    const btnEnviar = document.getElementById("btnEnviar");
    const btnRefazer = document.getElementById("btnRefazer");
    const btnConfirmar = document.getElementById("btnConfirmar");
    const btnVoltarLista = document.getElementById("btnVoltarLista");
    const btnNovo = document.getElementById("btnNovo");

    let profissionaisEncontrados = []; // Para guardar os profissionais da busca
    let profissionalSelecionado = null;

    function mostrarEtapa(num) {
        etapas.forEach((e, i) => e.classList.toggle("ativa", i === num - 1));
    }

    // Etapa 1 - Enviar solicitação
    btnEnviar.addEventListener("click", async () => { // Adicionamos 'async'

        const servicoId = document.getElementById("servico").value; // Agora pega o ID
        const local = document.getElementById("local").value.trim();
        const data = document.getElementById("data").value;
        const detalhesPesquisa = document.getElementById("pesquisarDetalhes").value.trim();

        if (!servicoId || !local || !data || !detalhesPesquisa) {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        // ----- INÍCIO DA MUDANÇA (ADEUS SIMULAÇÃO) -----
        try {
            // 1. Chamar nosso Backend em http://localhost:3000/api/profissionais
            const response = await fetch('http://localhost:3000/api/profissionais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idServico: servicoId }) // Envia o ID do serviço
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar profissionais no servidor.');
            }

            // 2. Receber os profissionais REAIS do banco de dados
            profissionaisEncontrados = await response.json();

            if (profissionaisEncontrados.length === 0) {
                lista.innerHTML = '<p>Nenhum profissional encontrado para este serviço.</p>';
            } else {
                // 3. Mostrar os profissionais na tela
                lista.innerHTML = profissionaisEncontrados.map((p, i) => `
                    <div class="card-profissional">
                        <strong>${p.Nome}</strong><br>
                        Serviço: ${p.NomeServico}<br>
                        Avaliação: ${p.Avaliacao} ⭐<br>
                        <p>"${p.Descricao_Propria_Servico}"</p>
                        <button data-index="${i}" class="btnSelecionar">Selecionar</button>
                    </div>
                `).join("");
            }

        } catch (error) {
            console.error('Erro no fetch:', error);
            alert('Não foi possível conectar ao servidor. Verifique o console.');
            return;
        }
        // ----- FIM DA MUDANÇA -----

        // Adiciona evento aos botões de seleção (SEU CÓDIGO ORIGINAL)
        document.querySelectorAll(".btnSelecionar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = e.target.dataset.index;
                profissionalSelecionado = profissionaisEncontrados[index];
                detalhes.innerHTML = `
                    <strong>${profissionalSelecionado.Nome}</strong><br>
                    Avaliação: ${profissionalSelecionado.Avaliacao} ⭐<br>
                    Serviço: ${profissionalSelecionado.NomeServico}
                `;
                mostrarEtapa(3);
            });
        });

        mostrarEtapa(2);
    });

    // Etapa 2 → Refazer pesquisa
    btnRefazer.addEventListener("click", () => mostrarEtapa(1));

    // Etapa 3 → Confirmar profissional
    btnConfirmar.addEventListener("click", () => {
        // TODO: Aqui você enviaria a confirmação para o backend
        // para criar uma "Solicitação" no banco.
        alert(`Profissional ${profissionalSelecionado.Nome} confirmado!`);
        mostrarEtapa(4);
    });
    btnVoltarLista.addEventListener("click", () => mostrarEtapa(2));

    // Etapa 4 → Nova pesquisa
    btnNovo.addEventListener("click", () => mostrarEtapa(1));
});