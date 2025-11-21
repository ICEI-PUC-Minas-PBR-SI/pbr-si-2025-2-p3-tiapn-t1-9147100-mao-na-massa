package com.maonamassa.api.repository;

import com.maonamassa.api.model.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// JpaRepository<TipoDaEntidade, TipoDoID>
// Nossa entidade é 'Servico' e o ID é 'Long'
public interface ServicoRepository extends JpaRepository<Servico, Long> {
    
    // Por enquanto, os métodos padrão (save, findById, findAll) são suficientes
    // para listar e gerenciar os serviços.
}