package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.dto.CarDto;
import lk.ijse.carrental.entity.Car;
import lk.ijse.carrental.repo.CarRepo;
import lk.ijse.carrental.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
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
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("No such a car Exists in the System");
        }
    }

    @Override
    public void updateCar(CarDto car) {
        if (repo.existsById(car.getCarId())){
            repo.save(mapper.map(car, Car.class));
        }else {
            throw new RuntimeException("No such a Car to update");
        }
    }

    @Override
    public List<CarDto> getAll() {
        return mapper.map(repo.findAll(),new TypeToken<List<CarDto>>(){}.getType());
    }

    @Override
    public CarDto search(String id) {
        if (repo.existsById(id)){
            return mapper.map(repo.findById(id), CarDto.class);
        }else {
            throw new RuntimeException("No such a Car In System");
        }
    }
}
