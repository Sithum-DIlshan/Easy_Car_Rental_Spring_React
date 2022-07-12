package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.dto.UserDto;
import lk.ijse.carrental.entity.User;
import lk.ijse.carrental.repo.UserRepo;
import lk.ijse.carrental.service.UserService;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author sithum
 */
@Service
//@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo repo;

    @Autowired
    ModelMapper mapper;


    @Override
    public void saveUser(UserDto dto) {
        repo.save(mapper.map(dto, User.class));
    }

    @Override
    public void deleteUser(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("No Such a user to delete ...!");
        }
    }

    @Override
    public void updateUser(UserDto dto) {
        if (repo.existsById(dto.getUsername())) {
            repo.save(mapper.map(dto, User.class));
        } else {
            throw new RuntimeException("No Such a User To update ...!");
        }
    }

    @Override
    public UserDto searchUser(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), UserDto.class);
        } else {
            throw new RuntimeException("No User for id " + id + " ...!");
        }
    }

    @Override
    public List<UserDto> getAllUsers() {
        if (repo.count() > 0) {
            return mapper.map(repo.findAll(), new TypeToken<List<UserDto>>() {
            }.getType());
        }else {
            throw new RuntimeException("No Users Available");
        }
    }
}
