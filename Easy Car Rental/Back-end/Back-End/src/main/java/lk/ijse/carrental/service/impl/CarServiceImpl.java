package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.dto.CarDto;
import lk.ijse.carrental.entity.Car;
import lk.ijse.carrental.repo.CarRepo;
import lk.ijse.carrental.service.CarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @author sithum
 */
public class CarServiceImpl implements CarService {
    @Autowired
    CarRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDto car) {
        if (!repo.existsById(car.getCarId())){
             repo.save(mapper.map(car, Car.class));
        }else {
            throw new RuntimeException("Car is already Exists with same Id");
        }
    }

    @Override
    public void deleteCar(String id) {

    }

    @Override
    public void updateCar(CarDto car) {

    }

    @Override
    public List<CarDto> getAll(CarDto car) {
        return null;
    }

    @Override
    public CarDto search(String id) {
        return null;
    }
}
