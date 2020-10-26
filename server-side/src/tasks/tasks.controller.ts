import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { GetTasksByFilterDto } from './dto/getTasksByFilter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService) {}

    @Get()
    getAllTasks() : Task []{
        return this.tasksService.getAllTasks();
    }

    @Get('/byFilter')
    getTasks(@Query() filterDto : GetTasksByFilterDto) : Task []{
        if (Object.keys(filterDto).length){
            return this.tasksService.getTasksByFilter(filterDto);
        } else {
            return this.tasksService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) : Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string
    ) : Task {
        return this.tasksService.createTask(title, description);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string){
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    changeStatus(@Param('id') id: string, @Body('status') status: TaskStatus){
        return this.tasksService.changeStatus(id, status);
    }
}
