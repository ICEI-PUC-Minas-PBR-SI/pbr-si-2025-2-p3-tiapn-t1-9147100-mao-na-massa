### 3.3.4 Processo 4 – Cadastro Do Contribuidor 

O processo de pagamento do serviço se inicia quando o cliente acessa a aba de pagamento na plataforma. Em seguida, o cliente seleciona a forma de pagamento desejada, confirma os dados do serviço e o valor a pagar. Após essas confirmações, o cliente envia a solicitação de pagamento.
A plataforma então, recebe a solicitação de pagamento e valida os dados da transação. Se ocorrer algum erro durante a validação, a plataforma notifica o cliente para que ele corrija as informações e repita o processo.
Se a validação for bem sucedida, a plataforma processa o pagamento, encaminha uma confirmação de recebimento ao cliente e verifica o status do pagamento. Quando o pagamento é confirmado, a plataforma atualiza o status do serviço para pago.
Em seguida, a plataforma gera a nota fiscal, acessando a base de dados, e envia a nota fiscal ao cliente. Ao mesmo tempo, envia o pagamento ao prestador do serviço.
Após essa etapa, a plataforma notifica o prestador sobre o recebimento do pagamento. O prestador então, deve confirmar o recebimento desse pagamento.
Em seguida, há uma verificação: caso o pagamento de fato tenha sido recebido, o prestador confirma novamente o recebimento, encerrando essa etapa do processo. Se houver algum erro, ou seja, se o pagamento não foi identificado, o prestador notifica a plataforma sobre a situação. Após essa notificação, o processo segue para interações posteriores, que podem envolver a instituição financeira.

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente.

![1.png](criarcontacontribuidor.png)

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