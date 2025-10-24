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

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)


### 4.3. Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam efetuar os cadastros de dados e controles associados aos processos identificados, assim como recuperações.
Utilizando a notação do DER (Diagrama Entidade e Relacionamento), elaborem um modelo, na ferramenta visual indicada na disciplina, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar, também, o controle de acesso de usuários (partes interessadas dos processos) de acordo com os papéis definidos nos modelos do processo de negócio.
_Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos._

#### 4.3.1 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

#### 4.3.2 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

![Exemplo de um modelo relacional](images/modeloRelacional.png "Exemplo de Modelo Relacional.")
---


#### 4.3.3 Modelo Físico

Insira aqui o script de criação das tabelas do banco de dados.

Veja um exemplo:

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

_Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas._

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | MySQL           |
| Front end      | HTML+CSS+JS     |
| Back end       | Java SpringBoot |
| Deploy         | Github Pages    |

