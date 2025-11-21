package com.maonamassa.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

// Mapeia esta classe para a tabela 'Prestadores'
@Entity
@Table(name = "Prestadores")
public class Prestador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT
    @Column(name = "ID_Prestador")
    private Long id;

    // --- Relacionamento Muitos-para-Um ---
    // Muitos prestadores podem estar associados a UMA Pessoa
    @ManyToOne(fetch = FetchType.LAZY) // Otimização: Só carrega a Pessoa quando necessário
    @JoinColumn(name = "CPF_Pessoa", nullable = false) // Chave Estrangeira
    private Pessoa pessoa;

    // --- Relacionamento Muitos-para-Um ---
    // Muitos prestadores podem oferecer UM Serviço (ex: vários eletricistas)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_Servico", nullable = false) // Chave Estrangeira
    private Servico servico;

    @Column(name = "Descricao_Propria_Servico")
    private String descricaoPropriaServico;

    @Enumerated(EnumType.STRING)
    @Column(name = "Status_Verificacao", nullable = false)
    private StatusVerificacao statusVerificacao = StatusVerificacao.PENDENTE;

    // Enum para o Status de Verificação
    public enum StatusVerificacao {
        PENDENTE, APROVADO, REPROVADO
    }

    // Getters e Setters
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public Servico getServico() {
        return servico;
    }

    public void setServico(Servico servico) {
        this.servico = servico;
    }

    public String getDescricaoPropriaServico() {
        return descricaoPropriaServico;
    }

    public void setDescricaoPropriaServico(String descricaoPropriaServico) {
        this.descricaoPropriaServico = descricaoPropriaServico;
    }

    public StatusVerificacao getStatusVerificacao() {
        return statusVerificacao;
    }

    public void setStatusVerificacao(StatusVerificacao statusVerificacao) {
        this.statusVerificacao = statusVerificacao;
    }
}