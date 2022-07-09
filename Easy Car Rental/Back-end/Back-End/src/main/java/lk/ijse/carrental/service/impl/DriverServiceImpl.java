package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.dto.DriverDto;
import lk.ijse.carrental.dto.UserDto;
import lk.ijse.carrental.entity.Driver;
import lk.ijse.carrental.entity.User;
import lk.ijse.carrental.repo.DriverRepo;
import lk.ijse.carrental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author sithum
 */
@Service
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveDriver(DriverDto driver) {
        repo.save(mapper.map(driver, Driver.class));
    }

    @Override
    public void deleteDriver(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("No Such a Driver to delete ...!");
        }
    }

    @Override
    public void updateDriver(DriverDto driver) {
        if (repo.existsById(driver.getId())) {
            repo.save(mapper.map(driver, Driver.class));
        } else {
            throw new RuntimeException("No Such a Driver To update ...!");
        }
    }

    @Override
    public List<DriverDto> getAll() {
        if (repo.count() > 0) {
            return mapper.map(repo.findAll(), new TypeToken<List<DriverDto>>() {
            }.getType());
        }else {
            throw new RuntimeException("No Drivers Available");
        }    }

    @Override
    public DriverDto search(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), DriverDto.class);
        } else {
            throw new RuntimeException("No User for id " + id + " ...!");
        }
    }
}
