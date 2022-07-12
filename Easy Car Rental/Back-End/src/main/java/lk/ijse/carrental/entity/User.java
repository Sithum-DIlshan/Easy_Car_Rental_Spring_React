package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


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

    @Cascade({CascadeType.ALL})
    @OneToOne
    Account account;

//    @Cascade({CascadeType.ALL})
//    @OneToOne
//    RegisterRequest request;
}
