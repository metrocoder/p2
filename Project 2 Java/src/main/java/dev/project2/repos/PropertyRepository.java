package dev.project2.repos;


import dev.project2.entities.Property;
import org.springframework.data.repository.CrudRepository;

public interface PropertyRepository extends CrudRepository<Property,Integer>
{
}
