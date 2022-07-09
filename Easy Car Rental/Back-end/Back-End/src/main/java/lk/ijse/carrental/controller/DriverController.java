package lk.ijse.carrental.controller;

import lk.ijse.carrental.dto.CarDto;
import lk.ijse.carrental.dto.DriverDto;
import lk.ijse.carrental.service.DriverService;
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
public class DriverController {
    @Autowired
    DriverService driverService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200, "ok", driverService.getAll());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@ModelAttribute DriverDto driver){
        driverService.saveDriver(driver);
        return new ResponseUtil(200, "Save",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@ModelAttribute DriverDto driver){
        driverService.updateDriver(driver);
        return new ResponseUtil(200, "Update",null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String id){
        driverService.deleteDriver(id);
        return new ResponseUtil(200, "Delete",null);
    }


}
