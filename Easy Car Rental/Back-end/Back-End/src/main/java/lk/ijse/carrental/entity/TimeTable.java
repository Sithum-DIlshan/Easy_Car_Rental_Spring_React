package lk.ijse.carrental.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author sithum
 */
@Entity
public class TimeTable {
    @Id
    private String id;
    private String userId;

    private Car car;
}
