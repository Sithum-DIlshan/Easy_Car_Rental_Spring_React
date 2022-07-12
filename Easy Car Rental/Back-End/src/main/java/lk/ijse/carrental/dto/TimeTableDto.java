package lk.ijse.carrental.dto;

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
public class TimeTableDto {
    private String id;
    private String userId;
    private String carId;
    private String driverId;
    private String time;
}
