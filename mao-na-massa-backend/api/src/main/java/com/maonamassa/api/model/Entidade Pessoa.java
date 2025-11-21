package com.maonamassa.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;
import org.hibernate.annotations.CreationTimestamp;

// Mapeia esta classe para a tabela 'Pessoas' no banco de dados
@Entity
@Table(name = "Pessoas")
public class Pessoa {

    // Define o CPF como a Chave Primária (Id)
    @Id
    @Column(length = 11) // Define o tamanho como CHAR(11)
    private String cpf;

    @Column(nullable = false, length = 100) // NOT NULL, VARCHAR(100)
    private String nome;

    @Column(nullable = false, unique = true, length = 100) // NOT NULL, UNIQUE, VARCHAR(100)
    private String email;

    @Column(nullable = false, length = 255) // NOT NULL, VARCHAR(255)
    private String senha; // Esta senha deve ser armazenada com hash (ex: BCrypt)

    @Column(nullable = false, length = 15) // NOT NULL, VARCHAR(15)
    private String telefone;

    @Column(length = 8)
    private String cep;

    @Column(length = 255)
    private String logradouro;

    @Column(length = 20)
    private String numero;

    @Column(name = "URL_Foto_Perfil", length = 255)
    private String urlFotoPerfil;

    // Mapeamento para o tipo ENUM do MySQL
    @Enumerated(EnumType.STRING)
    @Column(name = "Status_Conta", nullable = false)
    private StatusConta statusConta = StatusConta.ATIVO; // Valor padrão

    @CreationTimestamp // Define a data/hora atual automaticamente na criação
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "Data_Cadastro", updatable = false)
    private Date dataCadastro;

    // Enum para o Status da Conta
    public enum StatusConta {
        ATIVO, PENDENTE, BLOQUEADO
    }

    // Getters e Setters (Obrigatórios para o Spring Data JPA)
    
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getUrlFotoPerfil() {
        return urlFotoPerfil;
    }

    public void setUrlFotoPerfil(String urlFotoPerfil) {
        this.urlFotoPerfil = urlFotoPerfil;
    }

    public StatusConta getStatusConta() {
        return statusConta;
    }

    public void setStatusConta(StatusConta statusConta) {
        this.statusConta = statusConta;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}