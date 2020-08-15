package dev.project2.services;

import java.util.List;

public interface PropertyTypeService
{
    PropertyTypeService createPropertyType(PropertyTypeService property);

    PropertyTypeService getPropertyTypeById(int id);

    List<PropertyTypeService> getAllPropertyTypes();

    PropertyTypeService updatePropertyType(PropertyTypeService propertyType);

    Boolean deletePropertyType(PropertyTypeService propertyType);

}
