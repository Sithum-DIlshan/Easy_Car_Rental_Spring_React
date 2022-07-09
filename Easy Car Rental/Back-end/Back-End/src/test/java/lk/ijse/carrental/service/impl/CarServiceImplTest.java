package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.config.WebAppConfig;
import lk.ijse.carrental.entity.Car;
import lk.ijse.carrental.repo.CarRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

/**
 * @author sithum
 */
//@Transactional
@WebAppConfiguration
@ContextConfiguration(classes = {WebAppConfig.class})
@ExtendWith(SpringExtension.class)
class CarServiceImplTest {
    @Autowired
    CarRepo repo;


    @Test
    void saveCar() {
        repo.save(new Car("cccccccc", "ssss", "wwwwww", "ssssss"));
    }

    @Test
    void deleteCar() {

        repo.deleteById("cccccccc");


//        assertThrows(RuntimeException.class,()->{
//            repo.deleteById("cccccccc");
//        });

    }

    @Test
    void updateCar() {
        assertThrows(RuntimeException.class,() -> {
            if (repo.existsById("cccccccc")) {
                repo.save(new Car("cccccccc", "ssss", "auto", "ssssss"));
            } else {
                throw new RuntimeException("");
            }
        });
    }

    @Test
    void getAll() {

    }

    @Test
    void search() {
    }
}