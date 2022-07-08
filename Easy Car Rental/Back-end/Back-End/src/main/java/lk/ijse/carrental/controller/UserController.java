package lk.ijse.carrental.controller;

import lk.ijse.carrental.dto.UserDto;
import lk.ijse.carrental.service.UserService;
import lk.ijse.carrental.uti.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author sithum
 */
@RestController
@RequestMapping("app/v1/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200, "ok", userService.getAllUsers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@ModelAttribute UserDto user){
        userService.saveUser(user);
        return new ResponseUtil(200, "Save",null);
    }


}
