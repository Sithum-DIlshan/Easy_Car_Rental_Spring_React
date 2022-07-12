package lk.ijse.carrental.repo;

import lk.ijse.carrental.entity.RegisterRequest;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sithum
 */
public interface RegisterRequestRepo extends JpaRepository<RegisterRequest, String> {
}
