package lk.ijse.carrental.controller;

import lk.ijse.carrental.dto.TimeTableDto;
import lk.ijse.carrental.dto.UserDto;
import lk.ijse.carrental.service.TimetableService;
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
@RequestMapping("app/v1/timetable")
@CrossOrigin
public class TimeTableController {
    @Autowired
    TimetableService timetableService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200, "ok", timetableService.getAll());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@ModelAttribute TimeTableDto timeTable){
        timetableService.save(timeTable);
        return new ResponseUtil(200, "Save",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@ModelAttribute TimeTableDto timeTable){
        timetableService.update(timeTable);
        return new ResponseUtil(200, "Update",null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String id){
        timetableService.delete(id);
        return new ResponseUtil(200, "Delete",null);
    }


}
