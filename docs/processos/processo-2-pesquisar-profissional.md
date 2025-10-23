### 3.3.2 Processo 2 – Pesquisar profissional

Início
O cliente preenche os requisitos (tipo de serviço, local, data e orçamento). Em seguida, o sistema valida se todos os requisitos foram preenchidos corretamente. Se houver algum erro ou dado inválido, o sistema notifica o cliente, que deve ajustar as informações.
Se os requisitos estiverem corretos, a solicitação é enviada à plataforma, que recebe os dados do cliente e consulta o banco de dados de profissionais. A plataforma aplica filtros de localização, avaliação e disponibilidade para buscar por profissionais compatíveis.
Após isso, a plataforma verifica se encontrou profissionais que atendam aos critérios.
Se não, o cliente é notificado sobre a indisponibilidade desse profissional.
Se sim, apresenta ao cliente uma lista para que ele escolha o profissional ideal.
O cliente então, escolhe o profissional e verifica se ele realmente atende a todos os critérios.
Se sim, o processo é concluído com sucesso. Se não, o cliente é notificado sobre a indisponibilidade de profissionais e pode refazer a pesquisa.

![Exemplo de um Modelo BPMN do PROCESSO 2](../images/process.png "Modelo BPMN do Processo 2.")


#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
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

**1-Preencher Requisitos**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Serviço | Caixa de texto (ou Seleção)  |   Obrigatório    |   Valor default       |
| Local (Endereço/CEP) | Caixa de texto  |   Obrigatório    |   Valor default       |
| Data (do serviço) | Data (ou Seleção)  |   Obrigatório, data futura    |   Valor default       |
| Orçamento (Valor Máx.) | Número  |   Opcional    |   Valor default       |


| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Buscar Profissionais | Evento de Início  | default  |     
| Cancelar | Gateway "Requisitos válidos?"  | cancel |                |

**2-Enviar solicitação**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Observações Adicionais | Área de texto  |     Opcional           |    Valor default               |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Confirmar Solicitação | Atividade "Receber dados" (Plataforma)  | default |
| Editar (Voltar) | Atividade "Preencher Requisitos"  | cancel |

**3-Escolher profissional**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Lista de Profissionais | Seleção única (Radio button ou Tabela)  |     Obrigatório          |    Valor default               |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Selecionar | Gateway "Profissional atende aos critérios?"  | default |
| Voltar | Atividade "Preencher Requisitos"  | cancel |

**4-Notificação de profissional indisponível**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Ícone de Alerta | Imagem  |  N/A    |    Valor default               |
| Texto da Notificação | Apenas texto informativo  |  N/A    |    Valor default               |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| OK  | Atividade "Refazer Pesquisa" | default |

