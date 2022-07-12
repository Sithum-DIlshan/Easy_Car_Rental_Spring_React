package lk.ijse.carrental.service;

import lk.ijse.carrental.dto.UserDto;

import java.util.List;

/**
 * @author sithum
 */
public interface UserService {
    void saveUser(UserDto dto);

    void deleteUser(String id);

    void updateUser(UserDto dto);

    UserDto searchUser(String id);

    List<UserDto> getAllUsers();
}
