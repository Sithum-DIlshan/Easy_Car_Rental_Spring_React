package lk.ijse.carrental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;

/**
 * @author sithum
 */
@AllArgsConstructor
@NoArgsConstructor
@Data //getter and setter
@ToString
public class CarDto {
    private String carId;
    private String color;
    private String transmission;
    private String brand;
}
