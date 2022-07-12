package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.config.WebAppConfig;
import lk.ijse.carrental.entity.Account;
import lk.ijse.carrental.entity.RegisterRequest;
import lk.ijse.carrental.entity.User;
import lk.ijse.carrental.repo.UserRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author sithum
 */
//@Transactional
@WebAppConfiguration
@ContextConfiguration(classes = {WebAppConfig.class})
@ExtendWith(SpringExtension.class)

class UserServiceImplTest {
    @Autowired
    UserRepo repo;

    @Test
    void getAll(){
        List<User> all = repo.findAll();
        for(User user:all){
            System.out.println(user);
        }
    }

//    @Test
//    void saveUser() {
//       // repo.save(new User("Ceeee","eeeee","eeeeeee","eeeeee","eeeeee","eeeeeeee",20000));
//        repo.save(new User("sithum-23","Sithum","sigbfhjdjdd","dddddddd","eeeeeeeeeee","fddfdff",34344,new Account("A001",false), new RegisterRequest("reg1",false)));
//    }

    @Test
    void delete(){
        repo.deleteById("sithum-23");
    }
}