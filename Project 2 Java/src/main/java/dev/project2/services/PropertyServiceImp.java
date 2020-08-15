package dev.project2.services;

import dev.project2.entities.Property;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class PropertyServiceImp implements PropertyService
{

    @Override
    public Property createProperty(Property property)
    {
        return null;
    }

    @Override
    public Property getPropertyById(int pid)
    {
        return null;
    }

    @Override
    public List<Property> getAllProperties()
    {
        return null;
    }

    @Override
    public List<Property> getPropertiesFromLowToHigh(double price)
    {
        return null;
    }

    @Override
    public List<Property> getPropertiesFromHighToLow(double price)
    {
        return null;
    }

    @Override
    public List<Property> getPropertiesMatchingString(String query)
    {
        return null;
    }

    @Override
    public Property updateProperty(Property property)
    {
        return null;
    }

    @Override
    public Boolean deleteProperty(Property property)
    {
        return null;
    }
}
