package lk.ijse.carrental.service.impl;

import lk.ijse.carrental.dto.CarDto;
import lk.ijse.carrental.dto.TimeTableDto;
import lk.ijse.carrental.entity.TimeTable;
import lk.ijse.carrental.repo.TimetableRepo;
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
public class TimetableServiceImpl implements TimetableService {
    @Autowired
    TimetableRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void save(TimeTableDto dto) {
        if (!repo.existsById(dto.getId())){
             repo.save(mapper.map(dto, TimeTable.class));
        }else {
            throw new RuntimeException("Timetable is already Exists with same Id");
        }
    }

    @Override
    public void delete(String id) {
        if (repo.existsById(id)){
            repo.deleteById(id);
        }else {
            throw new RuntimeException("No such a Timetable Exists in the System");
        }
    }

    @Override
    public void update(TimeTableDto dto) {
        if (repo.existsById(dto.getId())){
            repo.save(mapper.map(dto, TimeTable.class));
        }else {
            throw new RuntimeException("No such a Timetable to update");
        }
    }

    @Override
    public List<TimeTableDto> getAll() {
        return mapper.map(repo.findAll(),new TypeToken<List<TimeTableDto>>(){}.getType());
    }

    @Override
    public TimeTableDto search(String id) {
        if (repo.existsById(id)){
            return mapper.map(repo.findById(id), TimeTableDto.class);
        }else {
            throw new RuntimeException("No such a Timetable In System");
        }
    }
}
