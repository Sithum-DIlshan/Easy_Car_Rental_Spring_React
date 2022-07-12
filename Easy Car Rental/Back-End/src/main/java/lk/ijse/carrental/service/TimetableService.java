package lk.ijse.carrental.service;

import lk.ijse.carrental.dto.TimeTableDto;
import lk.ijse.carrental.dto.UserDto;

import java.util.List;

/**
 * @author sithum
 */
public interface TimetableService {
    void save(TimeTableDto dto);

    void delete(String id);

    void update(TimeTableDto dto);

    TimeTableDto search(String id);

    List<TimeTableDto> getAll();
}
