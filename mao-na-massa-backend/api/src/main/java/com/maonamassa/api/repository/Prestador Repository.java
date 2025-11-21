package com.maonamassa.api.repository;

import com.maonamassa.api.model.Prestador;
import com.maonamassa.api.model.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// JpaRepository<TipoDaEntidade, TipoDoID>
// Nossa entidade é 'Prestador' e o ID é 'Long'
public interface PrestadorRepository extends JpaRepository<Prestador, Long> {

    // Método customizado para o Processo 2 (Pesquisar Profissional)
    // O Spring cria a consulta: "SELECT * FROM Prestadores WHERE ID_Servico = ?"
    List<Prestador> findByServico(Servico servico);
    
    // (No futuro, adicionaremos aqui a busca por geolocalização (latitude/longitude))
}