### 3.3.2 Processo 2 – Pesquisar profissional

Pesquisar Profissional inicia-se quando o cliente acessa a página "Solicitar Orçamento" na plataforma Mão na Massa e deseja encontrar profissionais adequados para um serviço específico. Este processo combina a definição de requisitos (filtros de busca) com a exibição de resultados e a seleção de um profissional.

O fluxo é dividido em duas etapas principais:

Etapa 1 – Definir Requisitos do Serviço: O cliente preenche os detalhes básicos do serviço que precisa (tipo de serviço, endereço com mapa interativo, data desejada e descrição). O sistema valida se todos os campos obrigatórios foram preenchidos corretamente, incluindo a seleção de um endereço válido via Google Maps.

Etapa 2 – Visualizar e Selecionar Profissional: Com os dados válidos, o sistema simula uma busca no banco de dados (usando dados mock) e exibe uma lista de profissionais compatíveis com os critérios informados. O cliente analisa os perfis (foto, nome, avaliação, número de avaliações) e seleciona o profissional que deseja contratar.

Saída deste processo: Um profissional selecionado pelo cliente.
Conexão com o próximo processo: A seleção de um profissional automaticamente inicia o Processo 3 – Solicitar Serviço, onde o cliente confirma e envia a solicitação formal.

Observação importante: No código implementado, este processo é integrado ao Processo 3 em uma jornada contínua do usuário. A separação conceitual aqui é didática, para destacar as responsabilidades distintas: busca/filtro (Processo 2) vs confirmação/envio (Processo 3).


### Tela: processo 2

![1.jpeg](processo 2 - modelagem nova.jpg)


### Tela: Nossos Serviços

![1.png](nossosservicos.png)

### Tela "Entre em Contato"

![1.png](entreemcontato.png)

* **Área de texto** - Título "Entre em Contato"
* **Área de texto** - Subtítulo "Pronto para transformar sua casa?..."
* **Imagem** - Ícone "Solicitar Orçamento"
* **Área de texto** - Título do formulário "Solicitar Orçamento"
* **Caixa de texto** - Nome Completo ("Seu nome")
* **Caixa de texto** - Telefone ("(11) 9999-9999")
* **Caixa de texto** - Email ("seu@email.com")
* **Seleção única** - Serviço Desejado ("Selecione um serviço")
* **Caixa de texto** - Endereço ("Rua, número, bairro")
* **Área de texto** - Detalhes do Serviço ("Descreva o que você precisa...")
* **Link** - Botão "Enviar Solicitação"
* **Área de texto** - Nota de rodapé do formulário ("Entraremos em contato...")
* **Área de texto** - Título da seção "Informações de Contato"
* **Imagem** - Ícone "Telefone"
* **Área de texto** - Label "Telefone"
* **Área de texto** - Valor "(11) 9999-9999"
* **Área de texto** - Info "Seg a Sex, 8h às 18h"
* **Imagem** - Ícone "Email"
* **Área de texto** - Label "Email"
* **Área de texto** - Valor "contato@casaservicos.com"
* **Área de texto** - Info "Respondemos em até 2h"
* **Imagem** - Ícone "Área de Atendimento"
* **Área de texto** - Label "Área de Atendimento"
* **Área de texto** - Valor "São Paulo e Região"
* **Área de texto** - Info "Zona Sul, Oeste e Centro"
* **Imagem** - Ícone "Horário de Funcionamento"
* **Área de texto** - Label "Horário de Funcionamento"
* **Área de texto** - Valor "Segunda a Sábado"
* **Área de texto** - Info "8h às 18h"
* **Link** - "Perguntas Frequentes"




**1-Definir Requisitos do Serviço**

Tela/Atividade: Etapa 1 – "Descreva sua necessidade" (ID etapa1)
Nesta etapa, o cliente informa os critérios para a busca de profissionais. O sistema usa esses dados para filtrar profissionais compatíveis.

| **Campo** | **Tipo** | **Restrições** | **Valor** |
| :--- | :--- | :--- | :--- |
| Instrução | Texto informativo | N/A | "Preencha os detalhes abaixo para encontrarmos os melhores profissionais para você." |
| Selecione um serviço (#servico) | Lista suspensa (select) | Obrigatório; não pode ficar na opção vazia | "Limpeza Residencial", "Manutenção e Reparos", "Jardinagem", "Elétrica", "Encanamento" |
| Endereço (#autocomplete-input) | Caixa de texto (com autocomplete Google Maps) | Obrigatório; deve selecionar um endereço válido da lista; integra com mapa | Ex: "Av. Afonso Pena, 1000, Belo Horizonte" |
| Mapa interativo (#map) | Mapa Google Maps | N/A; permite arrastar marcador; armazena lat/lng em campos ocultos | Mapa centrado na localização selecionada |
| Latitude (#latitude) | Campo oculto (hidden input) | Gerado automaticamente pelo mapa; obrigatório para validação | Ex: "-19.916681" |
| Longitude (#longitude) | Campo oculto (hidden input) | Gerado automaticamente pelo mapa; obrigatório para validação | Ex: "-43.934494" |
| Data desejada (#data) | Campo de data | Obrigatório; deve ser uma data futura (validação HTML5) | Ex: "2025-12-10" |
| Descreva o que você precisa (#pesquisarDetalhes) | Área de texto (textarea) | Obrigatório; min. 20 caracteres para detalhar o serviço | Ex: "Preciso instalar um chuveiro novo e consertar uma tomada." |

### Comandos

| **Comandos** | **Destino** | **Tipo** |
| :--- | :--- | :--- |
| Buscar Profissionais (`#btnEnviar`) | Gateway "Dados de busca válidos?" | default |

---

#### Detalhamento: Gateway "Dados de busca válidos?"
*(Implementado no evento click do botão `#btnEnviar`)*

**1. Condições de validação:**
* **Serviço:** `#servico.value` não vazio.
* **Endereço:** `#autocomplete-input.value` não vazio.
* **Data:** `#data.value` não vazio.
* **Descrição:** `#pesquisarDetalhes.value` não vazio.
* **Localização Válida:** `#latitude.value` e `#longitude.value` não vazios (gerados automaticamente pelo mapa).

**2. Fluxo (Se NÃO válidos):**
* Exibe `alert('Por favor, preencha todos os campos da solicitação.')` ou mensagem específica sobre o endereço.
* **Ação:** Permanece na Etapa 1; não avança.

**3. Fluxo (Se Válidos):**
* Armazena o serviço selecionado para a próxima etapa (`#servico-selecionado`).
* Filtra profissionais do array `mockProfissionais` baseado no serviço (ex.: `servico: "Elétrica"`).
* **Tratamento de erro:** Se nenhum profissional encontrado, exibe mensagem "Nenhum profissional encontrado para este serviço no momento."
* **Ação:** Avança para a **Etapa 2**, exibindo a lista de profissionais filtrados.

> **Exemplo prático de uso:**
> Cliente seleciona "Elétrica", digita "Rua das Flores, 123" (seleciona da lista), ajusta o mapa, escolhe data "15/12/2025" e descreve o problema.
> Clica "Buscar Profissionais" → Sistema valida → Vai para Etapa 2 com lista de eletricistas.



| **Campo** | **Tipo** | **Restrições** | **Valor** |
| :--- | :--- | :--- | :--- |
| Instrução | Texto informativo | N/A; inclui o serviço selecionado | "Encontramos estes profissionais para o serviço de [serviço-selecionado]." |
| Selecione um serviço (#servico) | Cards dinâmicos (HTML gerado via JS) | N/A; gerada com base no filtro do serviço; se vazia, mostra mensagem de "nenhum encontrado" | Cards com: foto, nome, estrelas (rating), número de avaliações |
| Card Individual (por profissional) | Container flexível | Cada card contém: imagem (foto), texto (nome, serviço, rating), botão "Selecionar" | Ex: Card de "José Carlos" (Elétrica, 4.9 estrelas, 132 avaliações) |

### Comandos

| **Comandos** | **Destino** | **Tipo** |
| :--- | :--- | :--- |
| Refazer Pesquisa (`#btnRefazer`) | Retorna à Etapa 1 (limpa filtros) | default |

---

#### ⚙️ Lógica da Exibição
*(Implementada na função de callback da busca)*

**1. Filtragem e Renderização:**
* Filtra `mockProfissionais` pelo serviço selecionado (ex.: `p.servico === servicoValor`).
* **Para cada profissional filtrado**, gera um card HTML contendo:
    * Imagem de perfil (URL).
    * Nome e serviço.
    * Rating com estrelas (ex.: "⭐⭐⭐⭐⭐ (4.9)").
    * **Botão "Selecionar"**: chama a função `selecionarProfissional(id)`.

**2. Tratamento de Erro:**
* Se `filtrados.length === 0`: exibe mensagem de indisponibilidade ("Nenhum profissional encontrado...").

---

####  Função `selecionarProfissional(id)`
* **Ação 1:** Busca o profissional pelo ID no array `mockProfissionais`.
* **Ação 2:** Armazena o objeto em `profissionalSelecionado`.
* **Ação 3:** Preenche os campos da próxima tela (`#detalhes-profissional`) com foto, nome, serviço e rating.
* **Navegação:** Avança para a **Etapa 3** (iniciando o Processo 3).

---

####  Gateway Implícito "Profissionais encontrados?"

* **SIM:** Exibe lista de cards; cliente seleciona um → Inicia Processo 3.
* **NÃO:** Mostra mensagem de erro; cliente pode refazer pesquisa (volta à Etapa 1).

> **Exemplo prático de uso:**
> Após busca por "Elétrica", sistema mostra 2 cards: "José Carlos (4.9 estrelas)" e "Carlos Souza (4.7 estrelas)".
> Cliente clica "Selecionar" em "José Carlos" → Vai para Etapa 3 com detalhes dele exibidos.

