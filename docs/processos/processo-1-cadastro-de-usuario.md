### 3.3.1 Processo 1 – CADASTRO DE USUÁRIO

O processo de "Cadastro de Usuário" tem como objetivo registrar novos usuários na plataforma, validando sua identidade inicial e, em seguida, segmentando-os em dois perfis distintos: Cliente ou Prestador. Durante o cadastro, o usuário acessa a plataforma e fornece seus dados pessoais (Nome, CPF, e-mail, telefone). A plataforma realiza uma validação inicial desses campos. Se os dados forem válidos, um código de verificação é enviado ao usuário (via e-mail ou SMS) para confirmar o canal de contato. O usuário deve inserir o código recebido. Caso o código esteja incorreto ou não seja recebido, o usuário pode solicitar o reenvio. Após a validação do código, o sistema direciona o usuário para a escolha do tipo de conta.
Se a conta for "Cliente": O usuário preenche informações adicionais (endereço, preferências), aceita os termos e, após validação da plataforma, seu perfil é criado.
Se a conta for "Prestador": O usuário preenche dados profissionais (área de atuação, experiência), envia documentação (RG, CPF/CNPJ, certificados) e aceita os termos. A plataforma realiza a validação dos dados e documentos (que pode incluir análise manual). Se aprovado, o perfil é criado.
O processo se encerra com a criação do perfil correspondente no banco de dados e o envio de uma confirmação ao usuário.

Oportunidades de melhoria:
Fluxo de Reenvio de Código: O diagrama BPMN e o texto divergem ligeiramente. O diagrama sugere um loop de falha ("Confirma? -> Não"), enquanto o texto sugere uma ação iniciada pelo usuário ("pode solicitar o reenvio"). Recomenda-se implementar o reenvio como uma ação explícita (ex: um botão "Não recebi o código") para evitar confusão.
Validação de Prestador: A validação de documentos do prestador pode ser demorada, especialmente se exigir análise manual. Seria ideal implementar um "status de conta" (ex: "Pendente de Aprovação"), permitindo que o prestador acesse a plataforma com limitações enquanto aguarda a aprovação, em vez de bloquear a conclusão do cadastro.
Experiência em Erros: Implementar mensagens de validação claras e imediatas para o usuário, tanto na etapa de "Validar Campos" (ex: "CPF já cadastrado", "E-mail inválido") quanto na etapa de upload de documentos do prestador (ex: "Formato de arquivo não suportado").
Segurança de Dados: Dado que o processo coleta dados sensíveis (CPF, RG, Comprovante de Residência), é crucial garantir o armazenamento seguro (criptografia) e o tratamento desses dados em conformidade com a LGPD.

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


**Preencher dados Pessoais (Usuário)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome | [Caixa de Texto]  |   Obrigatório        |     Valor default       |
| E-mail | [Caixa de Texto]  |   Obrigatório, formato de e-mail        |     Valor default       |
| CPF | [Caixa de Texto]  |   Obrigatório, 11 dígitos, formato de CPF        |     Valor default       |
| Telefone | [Caixa de Texto]  |  Obrigatório, formato de telefone (com DDD)        |     Valor default       |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Avançar | Atividade "Validar Campos" (Plataforma)  | default |
| Cancelar | Evento de Início (ou tela de Login)  | cancel |


**Inserir código de validação**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Confirmar | Gateway "Confirma?"  | default |
| Reenviar código | Atividade "Reenviar código" (Plataforma)  | default |