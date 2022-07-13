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
public class UserDto {
    private String username;
    private String name;
    private String email;
    private String password;
    private String address;
    private String contact;
    private double salary;
}
