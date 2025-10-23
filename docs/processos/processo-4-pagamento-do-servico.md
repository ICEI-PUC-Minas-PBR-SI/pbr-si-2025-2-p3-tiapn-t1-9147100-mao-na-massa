### 3.3.4 Processo 4 – Como Criar sua conta como Contribuidor 

O processo de criação de conta de contribuidor se inicia quando o novo usuário seleciona a opção "Criar Conta" e acessa a tela "Criar sua conta como Contribuidor". Em seguida, o usuário preenche suas informações de perfil, adicionando sua foto e informando seu nome.

Após essa etapa inicial, o contribuidor deve especificar os detalhes de seu serviço. Primeiramente, ele seleciona o "tipo de serviço" que oferece, utilizando o botão de filtro. Na sequência, o contribuidor indica as "Localizações que atende", definindo assim sua área de atuação geográfica.

Para completar o cadastro do perfil, o usuário deve adicionar fotos que comprovem seu trabalho, permitindo que futuros clientes possam avaliar seus serviços.

Uma vez que todas as informações são fornecidas, o contribuidor envia seu cadastro para a plataforma. A plataforma, então, recebe a solicitação e realiza a validação dos dados preenchidos. Se for identificado algum erro ou informação faltante, a plataforma notifica o usuário para que ele corrija os dados e envie novamente.

Se a validação for bem-sucedida, a plataforma processa o cadastro e cria o novo perfil de contribuidor. Uma confirmação de conta criada é enviada ao usuário, e seu perfil é ativado na plataforma, ficando visível para clientes e pronto para, futuramente, receber "Comentários dos Clientes".


#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

### Tela Principal - Mão na Massa
* **Imagem** - Logo "Mão na Massa"
* **Link** - Menu "Início"
* **Link** - Menu "Serviços"
* **Link** - Menu "Depoimentos"
* **Link** - Menu "Contato"
* **Link** - Menu "Sobre"
* **Seleção única** - Botão de tema (ícone sol/lua)
* **Link** - Botão "Solicitar orçamento"
* **Área de texto** - Título "Mão na Massa"
* **Área de texto** - Subtítulo "Serviços domésticos de qualidade"
* **Link** - Botão "Seja um contribuidor"
* **Link** - Botão/Aba "Entrar"
* **Link** - Botão/Aba "Criar Conta"
* **Área de texto** - Título do formulário "Criar sua conta como Contribuidor"
* **Arquivo** - Upload de foto de perfil (ícone de usuário)
* **Caixa de texto** - "Seu Nome"
* **Área de texto** - Label "Qual seu tipo de serviço?"
* **Seleção múltipla** - Botão "filtro com os serviços"
* **Área de texto** - Label "Localizações que atende"
* **Imagem** - Ícone de localização
* **Área de texto** - Label "Adicione fotos para que os clientes vejam seu trabalho"
* **Arquivo** - Botão "Adicione fotos" (ícone de imagem com "+")
* **Área de texto** - Área "Comentários dos Clientes futuros"


**1-Inserir Detalhes do Serviço**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Data do Serviço | Data  |  Obrigatório, data futura   |   Valor default       |
| Horário (preferencial) | Hora  |   Obrigatório    |   Valor default       |
| Endereço do Serviço | Caixa de Texto  |   Obrigatório   |   Valor default       |
| Descrição do Serviço | Área de texto  |  Obrigatório, (ex: min 20 caracteres)  |   Valor default       |
| (Perfil do Profissional) |  (Informativo) |  Obrigatório, data futura   |   (Dados do profissional são exibidos)       |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Enviar Solicitação | Gateway "Dados completos?"  | default  |     
| Voltar (ou Cancelar) | Evento de Início | cancel |                |

**2-Analisar Solicitação de Serviço**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| (Dados da Solicitação) | (Texto informativo)  |  N/A   |   Valor default       |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Aceitar | Evento "Confirmar Solicitação"  | default  |     
| Recusar (ou Cancelar) | Evento "Recusar solicitação" | cancel |                |


**3-Solicitação Concluída**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| (Mensagem de Sucesso) | (Texto informativo)  |  N/A   |   Valor default       |
| (Ícone de Sucesso) | Imagem  |  N/A   |   Valor default       |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| OK | Evento de Fim  | default  |     
| Abrir Chat | Atividade "Criar canal de comunicação" | cancel |                |


**4-Solicitação Concluída**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| (Mensagem de Erro) | (Texto informativo)  |  N/A   |   Valor default       |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Tentar Novamente | Atividade "Inserir detalhes do serviço"  | default  |   
| Buscar Outro Profissional | Atividade "Retomar processo de pesquisa"  | default  |  
| Cancelar | Evento de Fim | cancel |                |