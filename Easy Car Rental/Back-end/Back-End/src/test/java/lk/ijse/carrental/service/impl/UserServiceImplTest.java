package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.config.WebAppConfig;
import lk.ijse.carrental.entity.User;
import lk.ijse.carrental.repo.UserRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author sithum
 */
@Transactional
@WebAppConfiguration
@ContextConfiguration(classes = {WebAppConfig.class})
@ExtendWith(SpringExtension.class)

class UserServiceImplTest {
    @Autowired
    UserRepo repo;


    @Test
    void saveUser() {
        repo.save(new User("Ceeee","eeeee","eeeeeee","eeeeee","eeeeee","eeeeeeee",20000));
    }
}