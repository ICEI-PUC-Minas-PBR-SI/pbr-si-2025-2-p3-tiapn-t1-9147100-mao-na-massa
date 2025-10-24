### 3.3.5 Processo 4 – Avaliação de serviço

O processo de avaliação se inicia quando o cliente acessa a área de avaliação na plataforma.
O cliente então, deve informar uma nota e comentário e em seguida confirmar o envio da avaliação.
Após isso, a plataforma valida os dados enviados pelo cliente. Se ocorrer algum erro ou não houver dados suficientes, a plataforma notifica o cliente, que pode refazer a avaliação.
Se os dados estiverem preenchidos corretamente, registra a avaliação no banco de dados e atualiza o perfil do prestador.
Depois disso, a plataforma confirma o registro da avaliação e notifica o prestador sobre o novo feedback. Ao receber essa notificação, p prestador pode visualizar a avaliação e tem a opção de responder ou agradecer ao cliente.
Por fim, o cliente recebe a confirmação de que sua avaliação foi registrada, encerrando assim o processo.

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

![1.png](feedbacks.png) 

_Os tipos de dados a serem utilizados são:_

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