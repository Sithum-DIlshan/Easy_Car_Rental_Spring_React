package lk.ijse.carrental.repo;

import lk.ijse.carrental.config.JPAConfig;
import lk.ijse.carrental.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sithum
 */
public interface CarRepo extends JpaRepository<Car, String> {
}
