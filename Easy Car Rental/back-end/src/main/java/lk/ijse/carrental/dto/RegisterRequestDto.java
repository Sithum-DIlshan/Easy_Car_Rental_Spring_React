package lk.ijse.carrental.dto;

import lk.ijse.carrental.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * @author sithum
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class RegisterRequestDto {
    private String regId;
    private boolean confirmed;
//    User user;
}
