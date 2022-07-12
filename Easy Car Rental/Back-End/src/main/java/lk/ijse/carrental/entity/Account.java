package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * @author sithum
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Account {
    @Id
    private String accId;
    private Boolean verified;

}
