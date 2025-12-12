### 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da Solução 

A arquitetura da solução **"Mão na Massa"** é baseada em um modelo de **Três Camadas (Three-Tier Architecture)**, com uma clara separação de responsabilidades entre a apresentação (front-end), a lógica de negócio (back-end) e o armazenamento de dados (banco de dados).

A comunicação entre o front-end e o back-end é realizada através de uma **API RESTful**, utilizando o formato **JSON**, o que garante um desacoplamento total entre as camadas.

###  Camada de Apresentação (Front-end)
* **Tecnologias:** `HTML5`, `CSS3`, `JavaScript (ES6+)` e `Bootstrap`.
* **Responsabilidade:** Interface com o usuário (UI). Responsável por renderizar todas as telas e protótipos definidos (cadastro, busca de serviços, feedbacks), capturar as entradas do usuário e realizar requisições HTTP (`GET`, `POST`, `PUT`, `DELETE`) para a camada de back-end.

### Camada de Aplicação (Back-end)
* **Tecnologias:** `Java 17`, `Spring Boot`, `Spring Data JPA (Hibernate)`.
* **Responsabilidade:** O "cérebro" da aplicação. Expõe a API RESTful consumida pelo front-end. Gerencia toda a lógica de negócio, regras de validação e orquestração dos processos.
    * O **Spring Boot** facilita a criação dos endpoints.
    * O **Spring Data JPA** gerencia a comunicação com o banco, abstraindo consultas SQL.

### Camada de Dados (Banco de Dados)
* **Tecnologia:** `MySQL`.
* **Responsabilidade:** Armazenamento persistente e seguro das informações da plataforma (Pessoas, Serviços, Prestadores, Solicitações), garantindo a integridade dos dados conforme o modelo físico.

---
> **Nota:** Este design permite que as equipes de front-end e back-end trabalhem de forma independente, facilitando a manutenção e a escalabilidade futura da aplicação.


## 4.2. Protótipos de Telas 

O protótipo da plataforma **Mão na Massa** foi desenvolvido para oferecer uma visão clara da conexão entre clientes e profissionais de serviços domésticos.

O design prioriza a **simplicidade** e a **responsividade**, garantindo uma experiência de usuário (UX) fluida e intuitiva. As interfaces foram projetadas atendendo tanto aos requisitos funcionais (cadastro, login, solicitações) quanto aos não funcionais (usabilidade, acessibilidade e clareza).

###  Detalhamento das Interfaces

O fluxo de navegação guia o usuário desde o conhecimento dos serviços até a avaliação final. Abaixo, detalhamos as principais telas do sistema:

 **Tela Inicial (Home)**
    * **Objetivo:** Funciona como a porta de entrada da aplicação.
    * **Funcionalidade:** Apresenta a proposta de valor do "Mão na Massa" e direciona o usuário rapidamente para as ações principais: realizar o cadastro, fazer login ou iniciar uma busca por categorias.

 **Tela de Serviços**
    * **Objetivo:** Facilitar a escolha do profissional ou serviço adequado.
    * **Funcionalidade:** Exibe o catálogo de serviços disponíveis de forma organizada. Permite ao usuário visualizar detalhes, filtrar opções e selecionar o serviço desejado para solicitar um orçamento.

 **Tela de Feedback dos Clientes**
    * **Objetivo:** Promover credibilidade e confiança na plataforma.
    * **Funcionalidade:** Espaço dedicado à "prova social", onde são exibidas as avaliações e comentários deixados por outros usuários sobre os prestadores. Isso auxilia novos clientes na tomada de decisão baseada na reputação dos profissionais.

---
> **Nota de Design:** Todas as telas seguem um padrão visual consistente para garantir que o usuário se sinta seguro e orientado durante todo o processo de contratação.


### 4.3. Modelo de dados

O modelo de dados da solução "Mão na Massa" é centrado na entidade Pessoas, que armazena dados comuns a todos os usuários (Contratantes e Prestadores).

Pessoas (Forte): Tabela central que armazena dados de login e perfil (CPF, Nome, Email, Senha, etc.).

Servicos (Forte): Tabela de catálogo que define os tipos de serviços disponíveis na plataforma (ex: "Eletricista", "Encanador").

Prestadores (Forte): Tabela que especializa uma Pessoa como um prestador. Ela faz a ligação entre a Pessoas (quem é o profissional) e Servicos (o que ele faz).

Solicitacoes (Forte): Entidade principal que registra a transação. Ela conecta um Contratante (identificado pelo CPF da tabela Pessoas) a um Prestador (identificado pelo ID da tabela Prestadores).

Pagamentos (Fraca): Depende diretamente de uma Solicitacao. Armazena o valor e o status do pagamento, que é processado exclusivamente via PIX.

Avaliacoes (Fraca): Depende de uma Solicitacao concluída e registra a nota e comentário do Avaliador (seja Contratante ou Prestador) para o Avaliado.

### 4.3.3 Modelo Físico

Abaixo está o script SQL completo para a criação do banco de dados mão na massa, com todas as tabelas necessárias para suportar os processos de negócio definidos.

-- Configuração Inicial do Banco de Dados:
-- Apaga o banco de dados existente, se houver, para evitar erros e garantir a nova estrutura.
DROP DATABASE IF EXISTS mao_na_massa;

-- Cria o novo banco de dados.
CREATE DATABASE mao_na_massa;

-- Seleciona o banco de dados para os comandos seguintes.
USE mao_na_massa;

-- Tabela central para armazenar dados de TODOS os usuários.
CREATE TABLE Pessoas (
    CPF CHAR(11) PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL, -- Senha deve ser armazenada como hash
    Telefone VARCHAR(15) NOT NULL,
    CEP CHAR(8),
    Logradouro VARCHAR(255),
    Numero VARCHAR(20),
    URL_Foto_Perfil VARCHAR(255),
    Status_Conta ENUM('Ativo', 'Pendente', 'Bloqueado') NOT NULL DEFAULT 'Ativo',
    Data_Cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para catalogar os tipos de serviços oferecidos na plataforma.
CREATE TABLE Servicos (
    ID_Servico INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL UNIQUE,
    Descricao TEXT
);

-- Tabela que define quais PESSOAS podem atuar como PRESTADORES.
CREATE TABLE Prestadores (
    ID_Prestador INT AUTO_INCREMENT PRIMARY KEY,
    CPF_Pessoa CHAR(11) NOT NULL,
    ID_Servico INT NOT NULL,
    Descricao_Propria_Servico TEXT,
    Status_Verificacao ENUM('Pendente', 'Aprovado', 'Reprovado') NOT NULL DEFAULT 'Pendente',
    
    FOREIGN KEY (CPF_Pessoa) REFERENCES Pessoas(CPF),
    FOREIGN KEY (ID_Servico) REFERENCES Servicos(ID_Servico),
    UNIQUE(CPF_Pessoa, ID_Servico) -- Garante que um prestador não cadastre o mesmo serviço duas vezes.
);

-- Tabela principal para gerenciar cada CONTRATAÇÃO de serviço.
CREATE TABLE Solicitacoes (
    ID_Solicitacao INT AUTO_INCREMENT PRIMARY KEY,
    CPF_Contratante CHAR(11) NOT NULL,
    ID_Prestador INT NOT NULL,
    Descricao_Problema TEXT NOT NULL,
    Status_Solicitacao ENUM('Pendente', 'Aceita', 'Recusada', 'Em_Andamento', 'Concluida_Prestador', 'Finalizada', 'Cancelada') NOT NULL DEFAULT 'Pendente',
    Valor_Negociado DECIMAL(10, 2),
    Data_Criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    Data_Agendamento DATETIME,
    Data_Conclusao DATETIME,
    
    FOREIGN KEY (CPF_Contratante) REFERENCES Pessoas(CPF),
    FOREIGN KEY (ID_Prestador) REFERENCES Prestadores(ID_Prestador)
);

-- Tabela para gerenciar os pagamentos com sistema de retenção (escrow).
CREATE TABLE Pagamentos (
    ID_Pagamento INT AUTO_INCREMENT PRIMARY KEY,
    ID_Solicitacao INT NOT NULL,
    Valor DECIMAL(10, 2) NOT NULL,
    -- O método de pagamento está fixado como PIX, conforme definido na Modelagem de Processo.
    Metodo_Pagamento ENUM('PIX') NOT NULL DEFAULT 'PIX',
    Status_Pagamento ENUM('Pendente', 'Retido', 'Liberado', 'Reembolsado', 'Falhou') NOT NULL DEFAULT 'Pendente',
    Data_Pagamento DATETIME,
    Data_Liberacao DATETIME,
    
    FOREIGN KEY (ID_Solicitacao) REFERENCES Solicitacoes(ID_Solicitacao)
);

-- Tabela para o sistema de avaliação mútua.
CREATE TABLE Avaliacoes (
    ID_Avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    ID_Solicitacao INT NOT NULL,
    CPF_Avaliador CHAR(11) NOT NULL,
    CPF_Avaliado CHAR(11) NOT NULL,
    Nota INT NOT NULL, -- Nota de 1 a 5
    Comentario TEXT,
    Data_Avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (ID_Solicitacao) REFERENCES Solicitacoes(ID_Solicitacao),
    FOREIGN KEY (CPF_Avaliador) REFERENCES Pessoas(CPF),
    FOREIGN KEY (CPF_Avaliado) REFERENCES Pessoas(CPF)
);



Este script deverá ser incluído em um arquivo .sql na pasta src/bd.

### 4.4. Tecnologias

##  Tecnologias Utilizadas

Abaixo estão detalhadas as tecnologias, frameworks e ferramentas selecionadas para o desenvolvimento da plataforma **Mão na Massa**:

| Dimensão | Tecnologia | Descrição e Finalidade |
| :--- | :--- | :--- |
| **SGBD** | **MySQL** | Banco de dados relacional para armazenar de forma segura todas as informações (pessoas, serviços, prestadores). |
| **Front-end** | **HTML5, CSS3, JS (ES6+)** | Estrutura, estilo e interatividade padrão da web. |
| **Design** | **Bootstrap** | Framework CSS para garantir responsividade (mobile-first) e agilidade no desenvolvimento visual. |
| **Front (Opcional)**| *React ou Vue.js* | Bibliotecas reativas para facilitar a criação de interfaces complexas e gerenciamento de estado no futuro. |
| **Back-end** | **Java 17+** | Linguagem base para toda a lógica de negócio, garantindo robustez e alta performance. |
| **Framework** | **Spring Boot** | Acelera o desenvolvimento da API RESTful, gerenciando os *endpoints* de comunicação. |
| **ORM** | **Spring Data JPA / Hibernate** | Abstração para comunicação com o banco de dados, mapeando tabelas para objetos Java. |
| **Build** | **Maven** | Gerenciador de dependências e automação de compilação do projeto Java. |
| **IDEs** | **VS Code** & **IntelliJ IDEA** | Ambientes de desenvolvimento: VS Code para Front-end e IntelliJ para o Back-end (Java). |
| **Versionamento** | **Git & GitHub** | Controle de versão do código e plataforma de colaboração/backup. |
| **Testes API** | **Postman / Insomnia** | Ferramentas para testar e validar os endpoints da API antes da integração. |
| **Modelagem** | **MySQL Workbench** | Interface visual para modelagem e administração do banco de dados. |

## Stack Tecnológica

###  Front-end (Interface)
* **HTML5, CSS3, JavaScript (ES6+):** A base da aplicação, responsável pela estrutura e interatividade.
* **Bootstrap:** Framework utilizado para garantir um design responsivo e moderno.
* *(Opcional)* **React/Vue.js:** Considerado para futuras implementações de interfaces reativas.
* **IDE:** Visual Studio Code (VS Code).

### Back-end (Servidor)
* **Java 17:** Linguagem robusta utilizada no núcleo da lógica de negócio.
* **Spring Boot:** Framework para criação da API RESTful.
* **Spring Data JPA & Hibernate:** Responsáveis pelo mapeamento Objeto-Relacional (ORM) e comunicação com o banco.
* **Maven:** Gerenciamento de dependências e build.
* **IDE:** IntelliJ IDEA (Community/Ultimate).

### Dados e Infraestrutura
* **MySQL:** SGBD Relacional para persistência dos dados.
* **MySQL Workbench:** Ferramenta de modelagem e administração.
* **Git & GitHub:** Versionamento e hospedagem do código.
* **Postman/Insomnia:** Testes de requisições API.

Fluxo de Interação da Arquitetura:

+----------------+      1. Requisição HTTP      +----------------------+      4. Chamada da API      +-----------------------------+      5. Consulta SQL      +-----------------+
|                | ---------------------------> |                      | -------------------------> |                             | -------------------------> |                 |
|     Usuário    |                              |  Front-end (Navegador)|                            | Back-end API (Servidor Java)|                            | Banco de Dados  |
|   (Navegador)  |      (Renderiza HTML/CSS)    | (Hosp. GitHub Pages) |     (Hosp. no Heroku)    |    (Hosp. Heroku/AWS)       |      (MySQL)      |
|                |                              |                      |                            |                             |                            |                 |
|                | <--------------------------- |                      | <------------------------- |                             | <------------------------- |                 |
+----------------+     12. Resposta Visual     +----------------------+     10. Resposta JSON      +-----------------------------+     8. Retorno dos Dados    +-----------------+
                         (DOM é atualizado)                                   (Dados)