package lk.ijse.carrental.repo;

import lk.ijse.carrental.entity.Account;
import lk.ijse.carrental.entity.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sithum
 */
public interface TimetableRepo extends JpaRepository<TimeTable, String> {
}
