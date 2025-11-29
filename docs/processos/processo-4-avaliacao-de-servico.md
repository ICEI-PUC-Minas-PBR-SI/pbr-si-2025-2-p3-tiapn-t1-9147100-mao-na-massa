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


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Enviar Solicitação | Gateway "Dados completos?"  | default  |     
| Voltar (ou Cancelar) |Retornar à tela anterior (perfil ou lista de serviços) | cancel |                |

Gateway "Dados da avaliação completos?"
Condição “Sim”:
Nota selecionada (1–5).
Comentário preenchido (respeitando mínimo, se houver).
Condição “Não”:
A plataforma exibe uma mensagem de erro (por exemplo:
“Por favor, selecione uma nota e escreva um comentário sobre o serviço.”)
Permanece na atividade “Inserir Avaliação do Serviço”.
Se os dados forem considerados completos, o processo segue para a atividade de análise/registro da avaliação.

**2-Registrar e Processar Avaliação**

Nesta atividade, a plataforma recebe os dados enviados pelo cliente e os grava no banco de dados.

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Dados da Avaliação| Dados estruturados  |  N/A   |   ID do cliente, ID do profissional, nota, comentário, data/hora  |
| Status do Registro| Texto informativo  |  N/A   |  "Pendente", depois "Registrado"  |
|Atualização no Perfil do Prestador| Operação de sistema|  Automático   |  Recalcula média de notas, total de avaliações, lista de comentários |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
|Confirmar Registro (automático)| Evento "Avaliação registrada com sucesso"  | default  |     

Aqui não há interação direta do usuário; é o backend que:

Valida novamente (se necessário) a integridade dos dados.
Grava a avaliação no banco de dados.
Atualiza as métricas do profissional (média de estrelas, contador de avaliações).
Dispara uma notificação ao prestador informando sobre o novo feedback.
Se ocorrer falha de gravação (problema técnico), o fluxo pode seguir para um caminho de erro (atividade “Avaliação Não Concluída”), detalhado mais adiante.


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



| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
|OK / Voltar| Evento de Fim (retornar à tela de serviços, perfil ou depoimentos)  | default  |   
| Ver Minhas Avaliações (se existir)| Atividade "Listar avaliações do cliente" | default  |  

Ao chegar aqui, o processo de avaliação está concluído com sucesso e o cliente pode seguir utilizando a plataforma normalmente.

**5-Avaliação Não Concluída (Erro)**

Este fluxo alternativo cobre casos em que:

houve erro técnico ao salvar a avaliação;
a conexão caiu;
a validação detectou algum problema não tratável apenas com correção de campos.

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |

|Mensagem de Erro | Texto informativo       | N/A | "Não foi possível registrar sua avaliação. Tente novamente mais tarde."


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
|Tentar Novamente| Atividade "Inserir Avaliação do Serviço"| default  |   
|Cancelar| Evento de Fim | default  |  

Ao chegar aqui, o processo de avaliação está concluído com sucesso e o cliente pode seguir utilizando a plataforma normalmente.