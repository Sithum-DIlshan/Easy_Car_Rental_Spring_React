package lk.ijse.carrental.controller;

import lk.ijse.carrental.dto.RegisterRequestDto;
import lk.ijse.carrental.dto.TimeTableDto;
import lk.ijse.carrental.service.RegisterRequestService;
import lk.ijse.carrental.uti.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * @author sithum
 */
@RestController
@RequestMapping("app/v1/regReq")
@CrossOrigin
public class RegisterRequestController {
    @Autowired
    RegisterRequestService regReqService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAll(){
        return new ResponseUtil(200, "ok", regReqService.getAll());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil save(@ModelAttribute RegisterRequestDto req){
        regReqService.save(req);
        return new ResponseUtil(200, "Save",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil update(@ModelAttribute RegisterRequestDto req){
        regReqService.update(req);
        return new ResponseUtil(200, "Update",null);
    }

    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil delete(@RequestParam String id){
        regReqService.delete(id);
        return new ResponseUtil(200, "Delete",null);
    }


}
