package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.config.WebAppConfig;
import lk.ijse.carrental.entity.Account;
import lk.ijse.carrental.entity.RegisterRequest;
import lk.ijse.carrental.entity.User;
import lk.ijse.carrental.repo.RegisterRequestRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 * @author sithum
 */
@WebAppConfiguration
@ContextConfiguration(classes = {WebAppConfig.class})
@ExtendWith(SpringExtension.class)
class RegisterRequestServiceImplTest {
    @Autowired
    RegisterRequestRepo repo;


    @Test
    void save() {
        repo.save(new RegisterRequest("reg1", false, new User("sithum-23","Sithum","sigbfhjdjdd","dddddddd","eeeeeeeeeee","fddfdff",34344,new Account("A001",false))));
    }

    @Test
    void delete() {
        repo.deleteById("reg1");
    }

    @Test
    void update() {
    }

    @Test
    void getAll() {
    }

    @Test
    void search() {
    }
}