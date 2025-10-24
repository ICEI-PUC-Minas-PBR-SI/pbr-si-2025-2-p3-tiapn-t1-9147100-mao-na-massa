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
| Menu "Início" | Link  |  N/A  |   N/A       |
| Menu "Serviços" | Link  |  N/A  |   N/A       |
| Menu "Depoimentos | Link  |  N/A  |   N/A       |
| Menu "Contato" | Link  |  N/A  |   N/A       |
| Menu "Sobre" | Link  |  N/A  |   N/A       |
| Botão Tema (Sol/Lua) | Link  |  N/A  |   Valor default      |
| Botão "Seja um contribuidor" | Link  |  N/A  |   N/A       |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Clicar em Link do Menu | Tela Correspondente (Início, Serviços, etc.)  | navigation  |     
| Clicar "Solicitar orçamento" | Tela "Orçamento" | default |                |
| Clicar "Seja um contribuidor" | TAtividade "Criar Conta de Contribuidor" | default | 


**2-Controle de Acesso (Entrar / Criar Conta)**
| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Título "Mão na Massa" | Área de texto  |  N/A   |   Valor default       |
| Subtítulo "Serviços..." | Área de texto  |  N/A   |   Valor default       |
| Aba/Botão "Entrar" | Link |  N/A   |   N/A        |
| Aba/Botão "Criar Conta" | Link  |  N/A   |  N/A       |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Clicar em "Entrar" | Clicar em "Entrar"  | default  |     
| Clicar em "Criar Conta" | Evento "Recusar solicitação" | cancel |                |


**3-Formulário "Criar sua conta como Contribuidor**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Título do formulário | Área de texto  |  N/A   |  "Criar sua conta como Contribuidor"     |
| Foto de Perfil | Arquivo  | Obrigatório   |   Valor default (label)       |
| Seu Nome | Caixa de texto  | Obrigatório   |  Valor default (vazio)       |
| "Qual seu tipo de serviço?" | Seleção múltipla  | N/A   |  Valor default (label)   |
| "Localizações que atende | Área de texto  | N/A   |  Valor default (label)   |
| Ícone de Localização | Imagem  | N/A   |  Valor default  |
| "Adicione fotos..." | Área de texto  | N/A   |  Valor default (label)  |
| Botão "Adicione fotos" | Arquivo | Opcional (recomendado)   | Valor default (ícone)  |
| "Comentários dos Clientes..." | Área de texto  | N/A   |  Valor default (informativo)  |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Clicar em "Entrar" | Clicar em "Entrar"  | default  |     
| Clicar em "Criar Conta" | Evento "Recusar solicitação" | cancel |                |