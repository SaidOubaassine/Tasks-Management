package tasks.management.mappers.impl;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import tasks.management.domain.dto.TaskDto;
import tasks.management.domain.entities.TaskEntity;
import tasks.management.mappers.Mapper;

@Component
public class TaskMapperImpl implements Mapper<TaskEntity, TaskDto> {


    private final ModelMapper modelMapper;

    public TaskMapperImpl(ModelMapper modelMapper){
        this.modelMapper = modelMapper;
    }

    @Override
    public TaskDto mapTo(TaskEntity taskEntity) {
        return modelMapper.map(taskEntity, TaskDto.class);
    }

    @Override
    public TaskEntity mapFrom(TaskDto taskDto) {
        return modelMapper.map(taskDto, TaskEntity.class);
    }
}
