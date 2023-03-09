package mx.edu.utez.FastFoodLog4J2.repository;

import mx.edu.utez.FastFoodLog4J2.model.Dish;
import org.springframework.data.repository.CrudRepository;

public interface IDishRepository extends CrudRepository<Dish, Long> {
}
