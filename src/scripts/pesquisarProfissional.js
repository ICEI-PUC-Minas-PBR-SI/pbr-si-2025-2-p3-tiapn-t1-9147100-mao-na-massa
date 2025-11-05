document.addEventListener("DOMContentLoaded", () => {
    const etapas = document.querySelectorAll(".etapa");
    const lista = document.getElementById("lista-profissionais");
    const detalhes = document.getElementById("detalhes-profissional");

    const btnEnviar = document.getElementById("btnEnviar");
    const btnRefazer = document.getElementById("btnRefazer");
    const btnConfirmar = document.getElementById("btnConfirmar");
    const btnVoltarLista = document.getElementById("btnVoltarLista");
    const btnNovo = document.getElementById("btnNovo");

    let profissionalSelecionado = null;

    // Função pra alternar etapas
    function mostrarEtapa(num) {
        etapas.forEach((e, i) => e.classList.toggle("ativa", i === num - 1));
    }

    // Etapa 1 - Enviar solicitação
    btnEnviar.addEventListener("click", () => {
        const servico = document.getElementById("servico").value;
        const local = document.getElementById("local").value.trim();
        const data = document.getElementById("data").value;
        const detalhes = document.getElementById("pesquisarDetalhes").value.trim();

        if (!servico || !local || !data || !detalhes) {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        // Simulação da busca de profissionais
        const profissionais = [
            { nome: "João da Silva", avaliacao: 4.8, cidade: "Betim" },
            { nome: "Maria Souza", avaliacao: 4.6, cidade: "Contagem" },
            { nome: "Carlos Lima", avaliacao: 4.9, cidade: "Belo Horizonte" },
        ];

        lista.innerHTML = profissionais.map((p, i) => `
      <div>
        <strong>${p.nome}</strong><br>
        Avaliação: ${p.avaliacao}<br>
        Cidade: ${p.cidade}<br>
        <button data-index="${i}" class="btnSelecionar">Selecionar</button>
      </div>
    `).join("");

        // Adiciona evento aos botões de seleção
        document.querySelectorAll(".btnSelecionar").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = e.target.dataset.index;
                profissionalSelecionado = profissionais[index];
                detalhes.innerHTML = `
          <strong>${profissionalSelecionado.nome}</strong><br>
          Avaliação: ${profissionalSelecionado.avaliacao}<br>
          Cidade: ${profissionalSelecionado.cidade}
        `;
                mostrarEtapa(3);
            });
        });

        mostrarEtapa(2);
    });

    // Etapa 2 → Refazer pesquisa
    btnRefazer.addEventListener("click", () => mostrarEtapa(1));

    // Etapa 3 → Confirmar profissional
    btnConfirmar.addEventListener("click", () => mostrarEtapa(4));
    btnVoltarLista.addEventListener("click", () => mostrarEtapa(2));

    // Etapa 4 → Nova pesquisa
    btnNovo.addEventListener("click", () => mostrarEtapa(1));
});
