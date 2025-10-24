### 3. Modelagem dos Processos de Negócio

### 3.1. Modelagem da situação atual (Modelagem AS IS)
Atualmente, a contratação de serviços manuais (como pintura, elétrica ou hidráulica) ocorre de forma informal e descentralizada. Clientes recorrem a grupos de WhatsApp, redes sociais, anúncios de internet ou indicações de conhecidos para encontrar prestadores de serviço. Esse processo traz diversos problemas: insegurança, falta de garantias e dificuldade de verificar a qualidade do profissional.
Exemplo de como o processo acontece hoje:
1.	O cliente percebe a necessidade de um serviço.
2.	Ele procura por profissionais em grupos, redes sociais ou por indicação de conhecidos.
3.	A negociação acontece de maneira informal, via telefone ou mensagens.
4.	O pagamento é feito diretamente (dinheiro ou transferência), sem contrato.
5.	O serviço é executado, mas sem garantia formal ou registro de avaliação.
Esse fluxo é manual, ineficiente e sem padrão, gerando riscos como golpes, serviços mal executados e falta de transparência. Os profissionais também sofrem, já que trabalham de forma informal e com baixa visibilidade.


### 3.2. Descrição geral da proposta (Modelagem TO BE)

A proposta do projeto "Mão na Massa" é transformar um processo atualmente informal e descentralizado em uma experiência digital centralizada, eficiente e segura. O modelo TO-BE descreve como o fluxo de contratação de serviços será reorganizado a partir da introdução da plataforma, considerando as necessidades de Contratantes, Prestadores de Serviço e Administrador.
Principais melhorias em relação ao AS-IS:
•	Centralização do processo: todas as etapas (busca, contato, negociação, contratação, pagamento e avaliação) passam a ocorrer dentro da plataforma.
•	Comunicação integrada: chat e chamadas de vídeo permitem esclarecer dúvidas e evitar deslocamentos desnecessários.
•	Reputação e confiabilidade: sistema de avaliações mútuas reduz riscos de fraudes e aumenta a confiança.
•	Notificações e agenda: o prestador é informado em tempo real sobre novas solicitações e pode organizar sua agenda diretamente no sistema.
•	Gestão administrativa: o administrador terá acesso a relatórios, dados de uso da plataforma e poderá gerenciar permissões de usuários.
Processo 1 – Cadastro de Usuários: Esse processo é responsável por registrar os dois perfis de público na plataforma: Contratantes e Prestadores. O fluxo se inicia quando o usuário acessa a tela de cadastro e seleciona seu perfil.
•	O Contratante informa dados básicos (Nome, telefone, e-mail, endereço, forma de pagamento).
•	O Prestador realiza um cadastro mais completo, fornecendo, além dos dados pessoais, sua área de atuação, foto, descrição de serviços, valores, disponibilidade e documentos para verificação de segurança e qualificação. O sistema valida os dados e armazena o perfil, garantindo que apenas usuários verificados (especialmente os prestadores) possam interagir na plataforma, estabelecendo a base de segurança do serviço.
Processo 2 – Pesquisar Profissional: Este processo permite ao Contratante encontrar o profissional adequado para sua necessidade. O fluxo começa na tela inicial do aplicativo, onde o Contratante utiliza a barra de busca, aplicando filtros por tipo de serviço (pintura, elétrica, etc.) e por localização (raio de distância). O sistema retorna uma lista de prestadores que atendem aos critérios, exibindo seus perfis, descrições de serviço e, o mais importante, as avaliações e comentários de clientes anteriores. Esse processo substitui a "indicação" informal por um sistema de reputação transparente.
Processo 3 – Solicitar Serviço: Este é o processo central de contratação e negociação, conforme detalhado no diagrama BPMN. Após o Contratante selecionar um profissional (Processo 2), ele inicia uma solicitação formal, detalhando o tipo de serviço, a descrição do problema (podendo anexar fotos) e a urgência. A plataforma notifica o Prestador, que pode aceitar ou recusar a solicitação. Se aceita, um canal de comunicação seguro (chat integrado e/ou chamada de vídeo) é aberto para que ambas as partes possam alinhar detalhes, negociar valores e agendar a execução, tudo de forma registrada e centralizada.
Processo 4 – Pagamento do serviço: Esse processo garante a segurança financeira da transação para ambas as partes. Após o Prestador indicar a conclusão do serviço, o Contratante é notificado para realizar o pagamento (via Cartão, PIX ou saldo no app). O valor pago pelo cliente fica retido pela plataforma e não é imediatamente repassado. O pagamento só é liberado para o profissional após o cliente confirmar explicitamente que o serviço foi concluído conforme o combinado. Esse fluxo elimina a insegurança no pagamento e garante que o cliente pague apenas pelo serviço devidamente prestado.
Processo 5 – Avaliação: Este processo finaliza o ciclo do serviço e alimenta o sistema de reputação da plataforma. Após a confirmação do pagamento, o sistema solicita que ambas as partes realizem uma avaliação mútua. O Contratante avalia o Prestador (atribuindo nota e comentário sobre a qualidade, pontualidade, etc.), e o Prestador também pode avaliar o Contratante (sobre a clareza da solicitação, condições de trabalho, etc.). Esse processo é fundamental para construir a confiabilidade da plataforma, pois as notas dos prestadores impactam diretamente sua visibilidade no "Processo 2 – Pesquisar Profissional".
Assim, espera-se que o "Mão na Massa" preencha uma lacuna de mercado, reduzindo os impactos da informalidade e oferecendo conveniência e segurança aos contratantes. Ao mesmo tempo, o projeto visa ampliar a visibilidade e as oportunidades de trabalho para profissionais autônomos, promovendo a profissionalização e a inclusão digital em um setor essencial para a economia.

 
### 3.3. Modelagem dos processos

<ol>
<li><a href="processos/processo-1-cadastro-de-usuario.md">PROCESSO 1 - Cadastro de Usuários e cadastro de contribuidor</a></li>

<li><a href="processos/processo-2-pesquisar-profissional.md">PROCESSO 2 - Pesquisar profissional</a></li>

<li><a href="processos/processo-3-solicitar-servico.md">PROCESSO 3 - Solicitar Serviço</a></li>

<li><a href="processos/processo-4-pagamento-do-servico.md">PROCESSO 4 - Como Criar sua conta como Contribuidor</a></li>

<li><a href="processos/processo-5-avaliacao-de-servico.md">PROCESSO 5 - Avaliação de Serviço</a></li>
</ol>