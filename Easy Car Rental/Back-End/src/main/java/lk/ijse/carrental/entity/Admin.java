package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author sithum
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Admin {
    @Id
    private String user_name;
    private String password;
}
