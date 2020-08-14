package dev.project2.services;

import dev.project2.entities.Agent;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class AgentServiceImp implements AgentService
{
    @Override
    public Agent createNewAgent(Agent agent)
    {
        return null;
    }

    @Override
    public Agent getAgentById(int aid)
    {
        return null;
    }

    @Override
    public List<Agent> getAllAgents()
    {
        return null;
    }

    @Override
    public Agent updateAgent(Agent agent)
    {
        return null;
    }

    @Override
    public Boolean deleteAgent(Agent agent)
    {
        return null;
    }
}
