package tasks.management.services.impl;

import org.springframework.stereotype.Service;
import tasks.management.domain.dto.TaskDto;
import tasks.management.domain.entities.TaskEntity;
import tasks.management.repositories.TaskRepository;
import tasks.management.services.TasksService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class TasksServiceImpl implements TasksService {
    private TaskRepository taskRepository;

    public TasksServiceImpl(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }
    @Override
    public TaskEntity save(TaskEntity taskEntity) {
        return taskRepository.save(taskEntity);
    }

    @Override
    public List<TaskEntity> findAll() {
        return StreamSupport.stream(taskRepository
                        .findAll()
                        .spliterator(),false)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<TaskEntity> findOne(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public TaskEntity updateTask(Long id, TaskEntity task) {
        task.setId(id);
        return taskRepository.save(task);
    }

    @Override
    public boolean isExists(Long id) {
        return taskRepository.existsById(id);
    }

    @Override
    public void delete(Long id) {
        taskRepository.deleteById(id);
    }
}
