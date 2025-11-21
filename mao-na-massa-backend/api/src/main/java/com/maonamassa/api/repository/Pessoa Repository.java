package com.maonamassa.api.repository;

import com.maonamassa.api.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// Anotação que marca esta interface como um Repositório Spring
@Repository
// JpaRepository<TipoDaEntidade, TipoDoID>
// Nossa entidade é 'Pessoa' e o ID (CPF) é 'String'
public interface PessoaRepository extends JpaRepository<Pessoa, String> {

    // O Spring Data JPA entende o nome deste método e cria a consulta:
    // "SELECT * FROM Pessoas WHERE email = ?"
    // Usamos Optional para evitar erros de NullPointerException (ponteiro nulo)
    Optional<Pessoa> findByEmail(String email);
    
    // O Spring também nos dá de graça:
    // save(Pessoa) - Salva ou atualiza uma pessoa
    // findById(String cpf) - Busca uma pessoa pelo CPF
    // delete(Pessoa) - Deleta uma pessoa
    // findAll() - Lista todas as pessoas
}