package lk.ijse.carrental.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * @author sithum
 */
@Entity
public class TimeTable {
        @Id
        private String id;
        private String userId;
        private String carId;
        private String driverId;
        private String time;
}
