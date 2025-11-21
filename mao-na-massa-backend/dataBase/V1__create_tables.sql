-- Criação do banco de dados
CREATE DATABASE mao_na_massa
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

-- V1: SCRIPT DE CRIAÇÃO DAS TABELAS (ESTRUTURA)
-- Seleciona o banco de dados (assume que foi criado manualmente ou por outro script)
USE mao_na_massa;

-- Tabela central para armazenar dados de TODOS os usuários.
CREATE TABLE Pessoas (
    CPF CHAR(11) PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL,
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
    UNIQUE(CPF_Pessoa, ID_Servico)
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
    Nota INT NOT NULL,
    Comentario TEXT,
    Data_Avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (ID_Solicitacao) REFERENCES Solicitacoes(ID_Solicitacao),
    FOREIGN KEY (CPF_Avaliador) REFERENCES Pessoas(CPF),
    FOREIGN KEY (CPF_Avaliado) REFERENCES Pessoas(CPF)
);