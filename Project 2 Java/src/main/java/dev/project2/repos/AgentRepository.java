package dev.project2.repos;

import dev.project2.entities.Agent;
import org.springframework.data.repository.CrudRepository;

public interface AgentRepository extends CrudRepository<Agent, Integer>
{
}
