package lk.ijse.carrental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author sithum
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class RentRequestDetails {
    @Id
    private String reqId;
    @Id
    private String carId;
    private double distance;

    @ManyToOne
    @JoinColumn(name = "reqId",referencedColumnName = "reqId",insertable = false,updatable = false)
    private RentRequest reqs;

    //Out-verse
    @ManyToOne
    @JoinColumn(name = "carId",referencedColumnName = "carId",insertable = false,updatable = false)
    private Car cars;

    @OneToOne
    private Driver driver;
}
