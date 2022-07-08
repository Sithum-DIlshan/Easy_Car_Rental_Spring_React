package lk.ijse.carrental.uti;

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
public class ResponseUtil {
    int code;
    private String message;
    private Object data;
}
