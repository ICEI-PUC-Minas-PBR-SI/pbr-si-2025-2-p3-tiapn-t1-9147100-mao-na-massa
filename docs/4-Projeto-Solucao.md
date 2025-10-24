## 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da solução


......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

 Inclua um diagrama da solução e descreva os módulos e as tecnologias
 que fazem parte da solução. Discorra sobre o diagrama.
 
 **Exemplo do diagrama de Arquitetura**:
 
 ![Exemplo de Arquitetura](./images/arquitetura-exemplo.png)
 

### 4.2. Protótipos de telas

O protótipo desenvolvido apresenta a visão geral da plataforma Mão na Massa, que conecta clientes a profissionais especializados em serviços domésticos. O design das telas foi elaborado para ser simples, direto e responsivo, garantindo facilidade de uso, navegabilidade intuitiva e experiência agradável ao usuário.

As telas contemplam tanto os clientes quanto os contribuidores (prestadores de serviços), atendendo às histórias de usuário levantadas na especificação do projeto. A organização segue requisitos funcionais (cadastro, login, solicitação de orçamento, exibição de serviços e avaliações) e requisitos não funcionais (usabilidade, clareza visual, acessibilidade, responsividade e segurança na autenticação).

Cada interface foi pensada para guiar o usuário em um fluxo claro: conhecer os serviços, avaliar credibilidade, solicitar orçamento ou se cadastrar, acompanhar status e feedback.

Tela Inicial

![Exemplo de Wireframe](images/inicial.png)

Tela de Serviços

![Exemplo de Wireframe](images/servicos.png)

Tela FeedBack dos Clientes 

![Exemplo de Wireframe](images/feedback.png)
## Diagrama de Classes

<img src="images/dc.jpeg" >

### 4.3. Modelo de dados

Entidades identificadas: Contratado (forte), Gerente (forte), Contrato (forte), Contratante (fraca)
R1: Contratado — Gerente (Tipo: Forte) : Um gerente pode ser responsável por um contratado
R2: Contratado — Contrato (Tipo: Forte) : Um contratado participa de um contrato
R3: Contrato — Contratante (Tipo: Fraco) : A existência de um contrato depende de uma contratante associada
R4: Gerencia — Contratante (Tipo: Forte) : A entidade Gerencia (forte) se relaciona com a Contratante para definir quem administra a relação contratual
Relacionamento N-ário ( relacionamento geral )

#### 4.3.1 Modelo ER

<img src="images/Es relacional.jpeg" >

#### 4.3.2 Esquema Relacional

<img src="images/ER.jpeg" >

#### 4.3.3 Modelo Físico


<code>

-- Tabela para armazenar dados cadastrais de todas as pessoas (clientes e prestadores).
CREATE TABLE Pessoas (
    -- CPF da pessoa, chave primária que a identifica unicamente.
    CPF CHAR(11) PRIMARY KEY,
    -- Nome completo, campo obrigatório.
    Nome VARCHAR(100) NOT NULL,
    -- Email para contato.
    Email VARCHAR(100),
    -- Telefone para contato.
    Telefone VARCHAR(15),
    -- CEP do endereço.
    CEP CHAR(8),
    -- Número do endereço.
    Numero VARCHAR(10),
    -- Complemento do endereço (ex: Apto 101, Bloco B).
    Complemento VARCHAR(100)
);

-- Tabela para catalogar os tipos de serviços oferecidos.
CREATE TABLE Servicos (
    -- Código numérico único para cada serviço, gerado automaticamente.
    Codigo INT AUTO_INCREMENT PRIMARY KEY,
    -- Nome do serviço (ex: 'Desenvolvimento de Website', 'Consultoria Financeira').
    Nome VARCHAR(100) NOT NULL,
    -- Breve descrição do que o serviço inclui.
    Descricao VARCHAR(255)
);

-- Tabela para vincular uma pessoa a um serviço que ela presta.
CREATE TABLE Prestadores (
    -- ID numérico único para cada registro de prestador, gerado automaticamente.
    Cod_Prestador INT AUTO_INCREMENT PRIMARY KEY,
    -- CPF da pessoa que oferece o serviço, vindo da tabela Pessoas.
    CPF_Pessoa CHAR(11),
    -- Código do serviço oferecido, vindo da tabela Servicos.
    Codigo_Servico INT,
    -- Preço cobrado pelo serviço. O formato DECIMAL(12,2) suporta até 12 dígitos, com 2 casas decimais.
    Preco DECIMAL(12,2),
    -- Condições específicas do serviço (ex: 'Pagamento 50% adiantado', 'Disponível apenas aos finais de semana').
    Condicao VARCHAR(500),
    
    -- Define a ligação com a tabela de Pessoas.
    FOREIGN KEY (CPF_Pessoa) REFERENCES Pessoas(CPF),
    -- Define a ligação com a tabela de Serviços.
    FOREIGN KEY (Codigo_Servico) REFERENCES Servicos(Codigo)
);

</code>

Este script deverá ser incluído em um arquivo .sql na pasta src\bd.

### 4.4. Tecnologias
Dimensão,Tecnologia,Descrição e Finalidade
SGBD,MySQL,"Sistema de Gerenciamento de Banco de Dados relacional para armazenar de forma persistente e segura todas as informações da aplicação, como dados de pessoas, serviços e prestadores."
Front-end,"HTML5, CSS3, JavaScript (ES6+)","Tecnologias padrão da web. HTML para estruturar o conteúdo das páginas, CSS para estilização e design responsivo, e JavaScript para criar a interatividade, manipular eventos e se comunicar com o back-end."
,(Biblioteca Opcional: React ou Vue.js),"Para facilitar a criação de interfaces complexas e reativas, poderíamos adotar uma biblioteca como o React. Isso simplificaria a manipulação do estado da aplicação e a atualização da interface com base nos dados recebidos do back-end."
,(Framework CSS: Bootstrap),"Utilizaremos o Bootstrap para acelerar o desenvolvimento do design, garantindo que a aplicação seja responsiva (funcione bem em desktops, tablets e celulares) e tenha um visual moderno e consistente sem a necessidade de escrever todo o CSS do zero."
Back-end,Java (versão 17 ou superior),"Linguagem de programação robusta, segura e de alta performance que servirá como base para toda a lógica de negócio da aplicação."
,Spring Boot,"Framework que acelera o desenvolvimento de aplicações Java. Ele será usado para criar uma API RESTful, que são os ""caminhos"" (endpoints) que o front-end irá chamar para buscar, salvar, atualizar ou deletar dados no banco de dados."
,Spring Data JPA & Hibernate,"Módulos do Spring que facilitam enormemente a comunicação com o banco de dados MySQL. Eles permitem mapear as tabelas do banco para objetos Java, abstraindo a maior parte do código SQL."
,Maven,"Ferramenta de automação de compilação e gerenciamento de dependências. Será usada para gerenciar todas as bibliotecas do projeto Java (Spring, Hibernate, etc.)."
Ferramentas de Desenvolvimento,Visual Studio Code (VS Code),"IDE (Ambiente de Desenvolvimento Integrado) leve e versátil. Será usado para o desenvolvimento do front-end (HTML, CSS, JS)."
,IntelliJ IDEA Community/Ultimate,"IDE poderosa e especializada para o desenvolvimento back-end com Java e Spring Boot, oferecendo recursos avançados de depuração e produtividade."
,Git & GitHub,Sistema de controle de versão para gerenciar o histórico do código-fonte e plataforma de hospedagem de repositórios para colaboração e backup do projeto.
,Postman / Insomnia,"Ferramentas para testar a API RESTful do back-end de forma isolada, garantindo que ela funcione corretamente antes de integrá-la com o front-end."
,MySQL Workbench,"Ferramenta visual para modelar, administrar e interagir com o banco de dados MySQL."
Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.



+----------------+      1. Requisição HTTP      +----------------------+      4. Chamada da API      +-----------------------------+      5. Consulta SQL      +-----------------+
|                | ---------------------------> |                      | -------------------------> |                             | -------------------------> |                 |
|     Usuário    |                              |  Front-end (Navegador)|                            | Back-end API (Servidor Java)|                            | Banco de Dados  |
|   (Navegador)  |      (Renderiza HTML/CSS)    | (Hospedado no GitHub Pages) |     (Hospedado no Heroku)    |    (Hospedado no Heroku/AWS)|      (MySQL)      |
|                |                              |                      |                            |                             |                            |                 |
|                | <--------------------------- |                      | <------------------------- |                             | <------------------------- |                 |
+----------------+     12. Resposta Visual     +----------------------+     10. Resposta JSON      +-----------------------------+     8. Retorno dos Dados    +-----------------+
                         (DOM é atualizado)                                   (Dados)

