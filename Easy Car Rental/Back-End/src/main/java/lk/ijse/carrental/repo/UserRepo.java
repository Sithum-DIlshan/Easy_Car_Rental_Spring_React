package lk.ijse.carrental.repo;

import lk.ijse.carrental.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sithum
 */
public interface UserRepo extends JpaRepository<User, String> {
    void deleteUserByUsername(String s);

}
