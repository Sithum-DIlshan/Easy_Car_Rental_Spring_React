package lk.ijse.carrental.dto;

import lk.ijse.carrental.entity.RentRequestDetails;
import lk.ijse.carrental.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

/**
 * @author sithum
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentRequestDto {
    private String reqId;
    private LocalDate date;
    private User user;
    List<RentRequestDetailsDto> reqDetails;
    
}
