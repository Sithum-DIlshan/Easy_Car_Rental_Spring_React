package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * @author sithum
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RegisterRequest {
    @Id
    private String regId;
    private boolean confirmed;

    @Cascade({CascadeType.PERSIST,CascadeType.MERGE, CascadeType.SAVE_UPDATE})
    @OneToOne
    User user;
}
