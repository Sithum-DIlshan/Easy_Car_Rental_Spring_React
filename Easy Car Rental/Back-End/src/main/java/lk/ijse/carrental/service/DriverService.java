package lk.ijse.carrental.service;

import lk.ijse.carrental.dto.CarDto;
import lk.ijse.carrental.dto.DriverDto;

import java.util.List;

/**
 * @author sithum
 */
public interface DriverService {
    void saveDriver(DriverDto driver);

    void deleteDriver(String id);

    void updateDriver(DriverDto driver);

    List<DriverDto> getAll();

    DriverDto search(String id);
}
