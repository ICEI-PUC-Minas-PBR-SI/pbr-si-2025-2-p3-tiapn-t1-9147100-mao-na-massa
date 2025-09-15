# Especificações do Projeto

Este documento detalha as especificações do projeto "Mão na Massa", uma plataforma digital que conecta clientes a prestadores de serviços técnicos e manuais. A partir da documentação de contexto fornecida, este relatório abrange a definição do problema, a ideia da solução, e as especificações técnicas e de negócio. Para isso, foram utilizadas as seguintes técnicas e ferramentas:

Definição de Personas: Para representar os usuários-alvo da plataforma.

Histórias de Usuários: Para descrever as funcionalidades do sistema a partir da perspectiva do usuário.

Requisitos Funcionais e Não Funcionais: Para detalhar o escopo técnico do projeto.

Restrições do Projeto: Para elencar as limitações e os fatores limitantes para a execução do projeto.

## Personas

Para o projeto "Mão na Massa", foram definidas três personas principais que representam os usuários-alvo da plataforma: o Contratante, o Prestador de Serviço e o Administrador.

Nome: Ana Clara
Idade: 42 anos
Ocupação: Gerente de Recursos Humanos
Motivação: Ana mora em um apartamento e está sempre ocupada com o trabalho. Quando precisa de um serviço em casa, como um eletricista ou um encanador, ela valoriza a rapidez e, acima de tudo, a segurança. Ela quer ter a certeza de que está contratando um profissional confiável e não quer perder tempo buscando orçamentos ou negociando.

Cenário: Ana precisa instalar um novo chuveiro. Ela não tem indicações de profissionais e tem receio de contratar alguém desconhecido pela internet. Ela busca uma solução que a ajude a encontrar um profissional qualificado, que tenha avaliações de outros usuários e que ofereça um pagamento seguro, para que ela possa se sentir mais tranquila.

2. O Prestador de Serviço (Profissional)
Nome: José Carlos
Idade: 55 anos
Ocupação: Eletricista e Encanador Autônomo
Motivação: José é um profissional experiente, mas tem dificuldades para divulgar seu trabalho e encontrar novos clientes de forma constante. Ele não tem tempo para criar um site ou gerenciar redes sociais. Ele busca uma ferramenta que o ajude a encontrar novos trabalhos, organizar sua agenda e garantir que ele receba pelos serviços prestados de forma segura e eficiente.

Cenário: José quer aumentar sua renda e conquistar mais clientes. Atualmente, ele depende de indicações de boca a boca. Ele precisa de uma plataforma que o conecte com pessoas que precisam de seus serviços e que elimine a incerteza de pagamentos, já que muitos clientes costumam atrasar ou, em alguns casos, não pagam.

3. O Administrador
Nome: Glendha
Idade: 20 anos
Ocupação: Analista de Operações
Motivação: Glendha é responsável por garantir o bom funcionamento da plataforma. Ela precisa de acesso a relatórios e ferramentas de gerenciamento para monitorar o desempenho, resolver problemas de usuários e manter a qualidade do serviço. Ela busca eficiência e dados concretos para tomar decisões informadas e otimizar a experiência do usuário.

Cenário: Glendha precisa identificar quais tipos de serviço estão em alta e quais profissionais têm maior demanda. Ela também precisa emitir relatórios de atividades para a liderança e, ocasionalmente, intervir para resolver disputas entre contratantes e prestadores ou banir usuários que violam as regras da plataforma.


## Histórias de Usuários

Com base nas personas, as seguintes histórias de usuários são relevantes para o projeto "Mão na Massa":

|EU COMO | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Contratante  | solicitar um serviço detalhadamente (descrição, fotos e urgência)     | que os profissionais saibam exatamente o que eu preciso. |
|Contratante| me comunicar com o prestador de serviço antes de fechar o negócio      | Ptirar dúvidas e negociar os detalhes do trabalho. |
|Contratante| realizar o pagamento de forma segura dentro do aplicativo         | garantir que o valor só será repassado após a conclusão do serviço. |
|Contratante| avaliar o prestador de serviço após a conclusão do trabalho        | contribuir para a reputação dele na plataforma e ajudar outros usuários.|


|EU COMO | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Prestador de Serviço  | ser notificado sobre novas solicitações de serviço em minha área de atuação         |que eu possa responder rapidamente e conseguir mais trabalhos.              |
|Prestador de Serviço       |ter um chat integrado e poder fazer chamadas de vídeo                 | negociar o orçamento e visualizar o trabalho antes de aceitá-lo. |
|Prestador de Serviço | receber o pagamento de forma segura e garantida      | que eu não tenha que me preocupar com inadimplência.  |
|Prestador de Serviço  | avaliar o cliente após a conclusão do serviço       | que eu possa contribuir para a reputação dele na plataforma e ter um histórico de boas interações.     |



|EU COMO | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador       | acessar dados do banco de dados    | realizar a manutenção da aplicação.             |
|Administrador       |gerar relatórios               | monitorar o desempenho da plataforma e tomar decisões.|
|Administrador       | alterar as permissões de usuários               | garantir que apenas os perfis designados tenham acesso a funcionalidades específicas.|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RNF-001| O sistema deve permitir que o Contratante solicite um serviço com detalhes. | ALTA | 
|RNF-002| O sistema deve permitir a comunicação via chat entre Contratante e Prestador.| ALTA | 
|RNF-003| O sistema deve permitir que o Prestador receba notificações de novas solicitações.| ALTA | 
|RNF-004| O sistema deve gerenciar um sistema de pagamento seguro (retenção do valor).| MÉDIA | 
|RNF-005| O sistema deve permitir a avaliação mútua entre Contratante e Prestador.|ALTA | 
|RNF-006| O sistema deve permitir a realização de chamadas de vídeo integradas. |  MÉDIA | 
|RNF-007| O sistema deve permitir que o Prestador gerencie sua agenda.| MÉDIA | 
|RNF-008| O sistema deve permitir que o Administrador acesse dados do banco de dados. |   ALTA  | 
|RNF-009| O sistema deve permitir que o Administrador gere relatórios. | ALTA  | 
|RNF-010| REQUISITO NÃO FUNCIONAL |  ALTA  | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve ser responsivo para rodar em dispositivos móveis (web,iOS e Android). | ALTA | 
|RF-002| A plataforma deve ter um tempo de resposta máximo de 3 segundos para carregamento.  | MÉDIA |
|RF-003| A plataforma deve garantir a segurança das transações financeiras e dos dados pessoais. | ALTA | 
|RF-004| O sistema deve estar disponível 99,5% do tempo. | MÉDIA |
|RF-005| A interface do Administrador deve ser intuitiva para facilitar a manutenção. | MÉDIA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend, utilizando apenas ferramentas no-code. |


