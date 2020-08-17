package dev.project2.repos;

import dev.project2.entities.Agent;
import dev.project2.repos.AgentRepository;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

//@DataJpaTest
@SpringBootTest(classes=dev.project2.app.Project2Application.class)
public class AgentRepositoryTests
{
    @Autowired
    private AgentRepository ar;


    @Test
    void testCreateAgent()
    {
//        Agent agent = new Agent(0,
//                "John A.",
//                "myPass",
//                "image.png",
//                "john@email.com",
//                "201-201-1234");

       Agent result = ar.save(new Agent(0,
               "John A.",
               "myPass",
               "image.png",
               "john@email.com",
               "201-201-1234"));
       Assertions.assertNotEquals(0, result.getAid());
    }
}
