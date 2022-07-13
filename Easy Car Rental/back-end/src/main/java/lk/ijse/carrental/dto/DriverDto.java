package lk.ijse.carrental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

/**
 * @author sithum
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DriverDto {
    String id;
    String name;
    String address;
}
