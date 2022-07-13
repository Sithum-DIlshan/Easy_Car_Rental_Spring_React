package lk.ijse.carrental.repo;

import lk.ijse.carrental.entity.RentRequest;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sithum
 */
public interface RentRequestRepo extends JpaRepository<RentRequest, String> {
}
