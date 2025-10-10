### 3.3.1 Processo 1 – CADASTRO DE USUÁRIO

Processo 1 – Cadastro de usuário
Início
O usuário acessa a plataforma e preenche seus dados pessoais: Nome, CPF, e-mail e telefone.
Após o preenchimento,, os dados são enviados à plataforma, que valida as informações fornecidas.
Se a validação dos campos for bem sucedida, a plataforma envia um código de validação para o usuário, tal código pode ser enviado via e-mail ou SMS.
O usuário então, insere esse código na plataforma. Se ele estiver correto, o processo segue para o próximo passo. Se não, o usuário pode solicitar o reenvio do código.
Após a validação do código, o usuário deve escolher o tipo de conta que pretende criar (cliente ou prestador). De acordo com a decisão do usuário, essa etapa do processo se encerra com a criação da conta correspondente.
Caso o usuário tenha escolhido criar um perfil de cliente, deverá complementá-lo adicionando endereço, CEP, telefone e preferências de serviço.
Em seguida, se desejar o cliente também pode inserir uma foto de perfil.
Após isso, o usuário deve aceitar os termos de uso e a política de privacidade.
Depois, a plataforma deve validar as informações fornecidas. Se tudo estiver correto, a plataforma cria o perfil do cliente no banco de dados. Por fim, ela envia uma confirmação para o cliente, encerrando o processo.
Caso o usuário tenha criado uma conta de prestador, deverá complementar seu perfil profissional, informando qual sua área de atuação, descrição, experiência e cidade de atuação.
Se desejar, o usuário poderá inserir uma foto de perfil.
Após isso, o usuário deverá enviar documentação (RG, CPF/CNPJ, comprovante de residência, certificados técnicos).
O usuário então, deve aceitar a política de privacidade e os termos de uso. 
Após isso, a plataforma deve validar as informações e documentos fornecidos.
Se não for possível validar os documentos automaticamente, a plataforma pode solicitar ao usuário o reenvio dos mesmos ou notificar a administração para análise manual.
Se sim, a plataforma cria o perfil do prestador no banco de dados e em seguida, envia a ele uma confirmação, encerrando o processo.

![Exemplo de um Modelo BPMN do PROCESSO 1](../images/process.png "Modelo BPMN do Processo 1.")

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 1. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_


**Nome da atividade 1**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
| ***Exemplo:***  |                  |                |                   |
| login           | Caixa de Texto   | formato de e-mail |                |
| senha           | Caixa de Texto   | mínimo de 8 caracteres |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
| ***Exemplo:***       |                                |                   |
| entrar               | Fim do Processo 1              | default           |
| cadastrar            | Início do proceso de cadastro  |                   |


**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |
