package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author sithum
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Driver {
    @Id
    String id;
    String name;
    String address;

}
