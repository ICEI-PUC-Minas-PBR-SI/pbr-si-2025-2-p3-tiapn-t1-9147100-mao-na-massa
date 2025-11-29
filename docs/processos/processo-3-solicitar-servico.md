### 3.3.3 Processo 3 – Solicitar serviço

O Processo 3 – Solicitar Serviço inicia-se imediatamente após a seleção de um profissional no Processo 2. Ele foca na confirmação e envio formal da solicitação para o profissional escolhido, sem a necessidade de preencher novos detalhes (pois esses foram informados na Etapa 1 do Processo 2).

O fluxo é dividido em duas etapas principais:

Etapa 1 – Confirmar Solicitação: O cliente revisa os detalhes do profissional selecionado e confirma que deseja enviar a solicitação para ele. O sistema exibe um resumo do profissional (foto, nome, serviço, avaliação).

Etapa 2 – Solicitação Enviada: Após confirmação, o sistema registra a solicitação e exibe uma mensagem de sucesso, informando que o profissional será notificado e entrará em contato.

Entrada deste processo: Profissional selecionado + dados da solicitação (do Processo 2).
Saída: Solicitação enviada e registrada no sistema; cliente aguarda resposta do profissional.
Observação: No código, este processo é a continuação direta do anterior, sem telas separadas – é uma jornada única.


![1.jpeg](solicitarservico.jpeg)

#### Detalhamento das atividades

![1.png](pesquisarservicos.png)

_Os tipos de dados a serem utilizados são:_

* **Área de texto** - Descrição da Página ("Oferecemos uma ampla gama...")
* **Área de texto** - Descrição do Serviço (Limpeza Residencial)
* **Área de texto** - Descrição do Serviço (Manutenção e Reparos)
* **Área de texto** - Descrição do Serviço (Jardinagem)
* **Área de texto** - Texto (Outros serviços - "Precisa de outros serviços?...")
* **Imagem** - Logo (Mão na Massa)
* **Imagem** - Imagem do Serviço (Limpeza Residencial)
* **Imagem** - Imagem do Serviço (Manutenção e Reparos)
* **Imagem** - Imagem do Serviço (Jardinagem)
* **Link** - Início
* **Link** - Serviços
* **Link** - Depoimentos
* **Link** - Contato
* **Link** - Sobre
* **Link** - Solicitar orçamento (no topo)
* **Link** - Solicitar orçamento (card Limpeza Residencial)
* **Link** - Solicitar orçamento (card Manutenção e Reparos)
* **Link** - Solicitar orçamento (card Jardinagem)
* **Link** - Ver Todos os Serviços



**1-"Confirmar Solicitação" (ID etapa3)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor** |
| ---             | ---              | ---            | ---               |
| Instrução| Texto informativo  | N/A  |  Você está prestes a enviar sua solicitação para:"     |
| Detalhes do Profissional (#detalhes-profissional)| Container dinâmico (HTML gerado via JS)  |  N/A; preenchido pela função selecionarProfissional()  |  Foto, nome, serviço, rating do profissional selecionado     |
| Nota informativa | Texto informativo|   N/A   |  "O profissional será notificado e entrará em contato para confirmar o agendamento e o valor final."     |



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