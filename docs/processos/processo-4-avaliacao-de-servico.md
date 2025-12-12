### 3.3.4 Processo 4 – Avaliação de serviço

O processo de avaliação de serviço inicia-se quando o cliente acessa a área de avaliações na plataforma (por exemplo, após a conclusão de um serviço ou pela tela de depoimentos/feedback).
Nessa área, o cliente informa uma nota para o profissional e um comentário opcional ou obrigatório, e em seguida confirma o envio da avaliação.

Após o envio, a plataforma valida os dados informados. Se ocorrer algum erro (por exemplo, falta de nota, comentário vazio quando obrigatório ou problema de conexão), a plataforma notifica o cliente, que pode corrigir os dados e tentar enviar novamente.

Se os dados estiverem preenchidos corretamente, a plataforma registra a avaliação no banco de dados, atualiza o perfil do prestador (média de notas, quantidade de avaliações, listagem de comentários) e gera uma notificação para o profissional, informando que houve um novo feedback.

O prestador, ao ser notificado, pode acessar a área de avaliações, visualizar o comentário e, se desejar, responder ou registrar um agradecimento ao cliente (caso essa funcionalidade exista na versão final da plataforma).

Por fim, o cliente recebe uma confirmação visual de que sua avaliação foi registrada com sucesso, encerrando o processo de avaliação de serviço.


####  Depoimentos / Avaliações

![1.png](feedbacks.png) 

### Tela: Depoimentos
* **Imagem** - Logo (Mão na Massa)
* **Link** - Início
* **Link** - Serviços
* **Link** - Depoimentos
* **Link** - Contato
* **Link** - Sobre
* **Imagem** - Ícone (Mudar Tema Sol/Lua)
* **Link** - Solicitar orçamento
* **Área de texto** - Título ("O que nossos clientes dizem")
* **Área de texto** - Subtítulo ("A satisfação dos nossos clientes...")
* **Imagem** - Avaliação (Estrelas - Depoimento 1)
* **Área de texto** - Depoimento 1 ("Excelente serviço!...")
* **Caixa de texto** - Tag (Limpeza Residencial...)
* **Imagem** - Foto do Perfil (Ana Paula Silva)
* **Área de texto** - Nome e Localização (Ana Paula Silva)
* **Imagem** - Avaliação (Estrelas - Depoimento 2)
* **Área de texto** - Depoimento 2 ("Profissional muito competente!...")
* **Caixa de texto** - Tag (Manutenção...)
* **Imagem** - Foto do Perfil (Carlos Mendes)
* **Área de texto** - Nome e Localização (Carlos Mendes)

Esses elementos representam avaliações já registradas (depoimentos públicos). A seguir, detalhamos o fluxo para inserir uma nova avaliação.


**1-Inserir Avaliação do Serviço**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
|Nome do Profissional |Texto informativo | N/A (somente leitura)  |   "Ana Paula Silva", "Carlos Mendes"  |
| Serviço Realizado | Texto informativo  |   N/A (somente leitura)   |   "Limpeza Residencial", "Manutenção e Reparos"    |
| Endereço do Serviço | Caixa de Texto  |   Obrigatório   |   Valor default       |
|Data do Serviço | Texto informativo | N/A (somente leitura; vem do agendamento concluído) |  "10/12/2025"  |
|Nota (estrelas) |  Seleção única (1 a 5) |  Obrigatório; valor inteiro de 1 a 5   |  1, 2, 3, 4 ou 5 estrelas   |
|Data do Serviço | Texto informativo | N/A (somente leitura; vem do agendamento concluído) |  "10/12/2025"  |
|Nota (estrelas) |  Seleção única (1 a 5) |  Obrigatório; valor inteiro de 1 a 5   |  1, 2, 3, 4 ou 5 estrelas   |
|Comentário| Área de texto | Obrigatório (recomendado mínimo de 10–20 caracteres)| "Profissional muito atencioso e pontual…"|
|Tag/Categoria| Caixa de texto ou seleção | Opcional; categorização do serviço/experiência | "Limpeza Residencial", "Pós-obra", etc.  |


### Enviar Avaliação (Feedback)

| **Comandos** | **Destino** | **Tipo** |
| :--- | :--- | :--- |
| Enviar Solicitação | Gateway "Dados completos?" | default |
| Voltar (ou Cancelar) | Retornar à tela anterior (perfil ou lista de serviços) | cancel |

---

#### Gateway "Dados da avaliação completos?"

**1. Condição "Sim" (Dados Válidos):**
* **Requisitos:**
    * Nota selecionada (escala 1–5).
    * Comentário preenchido (respeitando limite mínimo de caracteres, se houver).
* **Ação:** O processo segue para a atividade de análise/registro da avaliação.

**2. Condição "Não" (Dados Inválidos):**
* **Cenário:** Usuário tentou enviar sem nota ou sem comentário obrigatório.
* **Ação:**
    * A plataforma exibe uma mensagem de erro.
    * *Exemplo:* "Por favor, selecione uma nota e escreva um comentário sobre o serviço."
    * **Resultado:** Permanece na atividade "Inserir Avaliação do Serviço" para correção.
**2-Registrar e Processar Avaliação**

Nesta atividade, a plataforma recebe os dados enviados pelo cliente e os grava no banco de dados.

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Dados da Avaliação| Dados estruturados  |  N/A   |   ID do cliente, ID do profissional, nota, comentário, data/hora  |
| Status do Registro| Texto informativo  |  N/A   |  "Pendente", depois "Registrado"  |
|Atualização no Perfil do Prestador| Operação de sistema|  Automático   |  Recalcula média de notas, total de avaliações, lista de comentários |


### Registro da Avaliação (Processamento)

| **Comandos** | **Destino** | **Tipo** |
| :--- | :--- | :--- |
| Confirmar Registro (automático) | Evento "Avaliação registrada com sucesso" | default |

---

####  Lógica do Sistema (Backend)
*(Interação automática, sem ação do usuário)*

**1. Processamento de Sucesso:**
* **Validação:** O sistema verifica novamente a integridade dos dados recebidos.
* **Persistência:** Grava a avaliação definitivamente no banco de dados.
* **Atualização de Métricas:** Recalcula a média de estrelas do profissional e incrementa o contador de avaliações recebidas.
* **Notificação:** Dispara um alerta para o prestador informando sobre o novo feedback.

**2. Tratamento de Falha (Erro Técnico):**
* **Condição:** Se ocorrer falha na gravação (ex: banco fora do ar).
* **Ação:** O fluxo segue para o caminho de erro (atividade "Avaliação Não Concluída"), detalhado posteriormente.


**3-Visualizar e Responder Avaliação (Prestador)**

Nesta atividade, já no lado do prestador, ele é notificado e pode visualizar a nova avaliação.

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
|Lista de Avaliações | Lista informativa |  N/A   |  Avaliações ordenadas por data ou relevância     |
|Avaliação específica| Texto informativo |  N/A   | "Nota: 5 estrelas. Comentário: Excelente serviço!…"     |
|Campo de Resposta (opcional) | LÁrea de texto|  Opcional; tamanho máximo  |  "Obrigado pelo feedback! Foi um prazer atender você." |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
|Responder Avaliação| Atividade "Registrar resposta do prestador" | default  |     
|Não responder / Voltar | Retornar à lista de avaliações| cancel |                |


**4-Avaliação Concluída (Sucesso)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |

|Mensagem de Sucesso     | Texto informativo       | "Sua avaliação foi registrada com sucesso. Obrigado pelo feedback!"  | 
|Ícone de Sucesso | Imagem/Ícone |  N/A   |  Ícone de check, estrela, ou similar       |



### Conclusão da Avaliação (Sucesso)

| **Comandos** | **Destino** | **Tipo** |
| :--- | :--- | :--- |
| OK / Voltar | Evento de Fim (retornar à tela de serviços, perfil ou depoimentos) | default |
| Ver Minhas Avaliações (se existir) | Atividade "Listar avaliações do cliente" | default |

---

####  Status do Processo
* **Conclusão:** Ao chegar nesta etapa, o processo de avaliação foi finalizado com sucesso.
* **Estado Final:** O cliente recebe a confirmação visual e pode seguir utilizando a plataforma normalmente.

### 5-Avaliação Não Concluída (Erro)

####  Fluxo Alternativo
Este fluxo cobre casos de falha onde o processo não pode seguir adiante.

**Cenários de ativação:**
* **Erro Técnico:** Falha interna ao tentar salvar a avaliação no banco de dados.
* **Conectividade:** A conexão com a internet caiu durante o envio.
* **Validação Crítica:** O sistema detectou um problema nos dados que não é tratável apenas pedindo para o usuário corrigir um campo (ex: ID do profissional inválido).

### Tela de Erro (Detalhes e Comandos)

| **Campo** | **Tipo** | **Restrições** | **Valor** |
| :--- | :--- | :--- | :--- |
| Mensagem de Erro | Texto informativo | N/A | "Não foi possível registrar sua avaliação. Tente novamente mais tarde." |

| **Comandos** | **Destino** | **Tipo** |
| :--- | :--- | :--- |
| Tentar Novamente | Atividade "Inserir Avaliação do Serviço" | default |
| Cancelar | Evento de Fim | cancel |

---

#### Status do Processo
* **Conclusão:** Ao chegar aqui, o processo de avaliação foi **encerrado sem sucesso** (ou interrompido).
* **Próximos Passos:** O cliente optou por não tentar novamente no momento e retorna à navegação normal da plataforma.