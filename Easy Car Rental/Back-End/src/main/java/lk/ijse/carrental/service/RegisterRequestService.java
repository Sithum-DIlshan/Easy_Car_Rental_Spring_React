package lk.ijse.carrental.service;

import lk.ijse.carrental.dto.RegisterRequestDto;
import lk.ijse.carrental.dto.TimeTableDto;
import lk.ijse.carrental.entity.Account;

import java.util.List;

/**
 * @author sithum
 */
public interface RegisterRequestService {
    void save(RegisterRequestDto dto);

    void delete(String id);

    void update(RegisterRequestDto dto);

    RegisterRequestDto search(String id);

    List<RegisterRequestDto> getAll();
}
