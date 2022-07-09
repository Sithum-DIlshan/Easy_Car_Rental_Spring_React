package lk.ijse.carrental.service;

import lk.ijse.carrental.dto.CarDto;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author sithum
 */

public interface CarService {
    void saveCar(CarDto car);

    void deleteCar(String id);

    void updateCar(CarDto car);

    List<CarDto> getAll(CarDto car);

    CarDto search(String id);
}
