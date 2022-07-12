package lk.ijse.carrental.repo;

import lk.ijse.carrental.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sithum
 */
public interface AccountRepo extends JpaRepository<Account, String> {
}
