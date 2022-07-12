package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

/**
 * @author sithum
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class RentRequest {
    @Id
    private String reqId;
    private LocalDate date;

    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "username", referencedColumnName = "username", nullable = false)
    private User user;

    @OneToMany(mappedBy = "requests", cascade = CascadeType.ALL)
    List<RentRequestDetails> reqDetails;

}
