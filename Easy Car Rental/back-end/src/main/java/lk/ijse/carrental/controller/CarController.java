package lk.ijse.carrental.controller;

import lk.ijse.carrental.dto.CarDto;
import lk.ijse.carrental.dto.UserDto;
import lk.ijse.carrental.service.CarService;
import lk.ijse.carrental.uti.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author sithum
 */
@RestController
@RequestMapping("app/v1/car")
@CrossOrigin
public class CarController {
    @Autowired
    CarService carService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200, "ok", carService.getAll());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@ModelAttribute CarDto car){
        carService.saveCar(car);
        return new ResponseUtil(200, "Save",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@ModelAttribute CarDto car){
        carService.updateCar(car);
        return new ResponseUtil(200, "Update",null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String id){
        carService.deleteCar(id);
        return new ResponseUtil(200, "Delete",null);
    }


}
