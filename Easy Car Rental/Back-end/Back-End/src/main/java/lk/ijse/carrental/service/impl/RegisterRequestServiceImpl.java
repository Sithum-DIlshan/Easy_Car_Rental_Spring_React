package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.dto.RegisterRequestDto;
import lk.ijse.carrental.dto.TimeTableDto;
import lk.ijse.carrental.entity.RegisterRequest;
import lk.ijse.carrental.entity.TimeTable;
import lk.ijse.carrental.repo.RegisterRequestRepo;
import lk.ijse.carrental.repo.TimetableRepo;
import lk.ijse.carrental.service.RegisterRequestService;
import lk.ijse.carrental.service.TimetableService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author sithum
 */
@Service
public class RegisterRequestServiceImpl implements RegisterRequestService {
    @Autowired
    RegisterRequestRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void save(RegisterRequestDto dto) {
        if (!repo.existsById(dto.getRegId())){
             repo.save(mapper.map(dto, RegisterRequest.class));
        }else {
            throw new RuntimeException("Reg Request is already Exists with same Id");
        }
    }

    @Override
    public void delete(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("No such a Reg Request Exists in the System");
        }
    }

    @Override
    public void update(RegisterRequestDto dto) {
        if (repo.existsById(dto.getRegId())){
            repo.save(mapper.map(dto, RegisterRequest.class));
        }else {
            throw new RuntimeException("No such a Reg Request to update");
        }
    }

    @Override
    public List<RegisterRequestDto> getAll() {
        return mapper.map(repo.findAll(),new TypeToken<List<RegisterRequestDto>>(){}.getType());
    }

    @Override
    public RegisterRequestDto search(String id) {
        if (repo.existsById(id)){
            return mapper.map(repo.findById(id), RegisterRequestDto.class);
        }else {
            throw new RuntimeException("No such a Reg Request In System");
        }
    }
}
