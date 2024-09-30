package tasks.management.services;

import tasks.management.domain.entities.TaskEntity;

import java.util.List;
import java.util.Optional;

public interface TasksService {
    TaskEntity save(TaskEntity taskEntity);

    List<TaskEntity> findAll();

    Optional<TaskEntity> findOne(Long id);

    TaskEntity updateTask(Long id, TaskEntity task);

    boolean isExists(Long id);

    void delete(Long id);
}
