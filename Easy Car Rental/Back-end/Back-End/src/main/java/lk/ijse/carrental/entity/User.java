package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;


/**
 * @author sithum
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class User {
    @Id
    private String username;
    private String name;
    private String email;
    private String password;
    private String address;
    private String contact;
    private double salary;
}
