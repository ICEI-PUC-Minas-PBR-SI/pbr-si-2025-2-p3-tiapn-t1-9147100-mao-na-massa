### 3.3.4 Processo 4 – Avaliação de serviço

O processo de avaliação de serviço inicia-se quando o cliente acessa a área de avaliações na plataforma (por exemplo, após a conclusão de um serviço ou pela tela de depoimentos/feedback).
Nessa área, o cliente informa uma nota para o profissional e um comentário opcional ou obrigatório, e em seguida confirma o envio da avaliação.

Após o envio, a plataforma valida os dados informados. Se ocorrer algum erro (por exemplo, falta de nota, comentário vazio quando obrigatório ou problema de conexão), a plataforma notifica o cliente, que pode corrigir os dados e tentar enviar novamente.

Se os dados estiverem preenchidos corretamente, a plataforma registra a avaliação no banco de dados, atualiza o perfil do prestador (média de notas, quantidade de avaliações, listagem de comentários) e gera uma notificação para o profissional, informando que houve um novo feedback.

O prestador, ao ser notificado, pode acessar a área de avaliações, visualizar o comentário e, se desejar, responder ou registrar um agradecimento ao cliente (caso essa funcionalidade exista na versão final da plataforma).

Por fim, o cliente recebe uma confirmação visual de que sua avaliação foi registrada com sucesso, encerrando o processo de avaliação de serviço.


#### Detalhamento das atividades

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