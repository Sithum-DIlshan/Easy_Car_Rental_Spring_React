package lk.ijse.carrental.dto;

import lk.ijse.carrental.entity.Car;
import lk.ijse.carrental.entity.Driver;
import lk.ijse.carrental.entity.RentRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author sithum
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RentRequestDetailsDto {
    private String reqId;
    private String carId;
    private double distance;
    private String driverId;
}
