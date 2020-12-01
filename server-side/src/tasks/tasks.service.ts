import { Injectable } from '@nestjs/common';
import { Task } from '../schemas/task.schema';
//import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  getAllTasks(): Task[] {
    return this.taskModel.find().exec();
  }

  getToDo(): Task[] {
    return this.taskModel.find({ status: 'ToDo' }).exec();
  }

  getDone(): Task[] {
    return this.taskModel.find({ status: 'DONE' }).exec();
  }

  getDoingOfMember(idMember: any): Task[] {
    return this.taskModel.find({ _id: idMember, status: 'Doing' });
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  update(taskUpdate: any): Promise<Task> {
    console.log(taskUpdate);
    console.log(taskUpdate.id);
    const task = this.taskModel.updateOne(
      { _id: taskUpdate.id },
      {
        name: taskUpdate.name,
        description: taskUpdate.description,
        status: taskUpdate.status,
      },
    );
    // console.log(task);
    return task;
  }

  // getTasksByFilter(filterDto : GetTasksByFilterDto) : Task[] {
  //     const {status, search} = filterDto;
  //     let tasks = this.getAllTasks();

  //     if(status) {
  //         tasks = tasks.filter(task => task.status === status)
  //     }

  //     if(search) {
  //         tasks = tasks.filter(task =>
  //             task.title.includes(search) ||
  //             task.description.includes(search))
  //     }
  //     return tasks;
  // }

  // getTaskById(id: string) : Task {
  //     return this.tasks.find(task => task.id === id)
  // }

  // createTask(title: string, description: string){
  //     const task : Task = {
  //         id: uuidv4(),
  //         title,
  //         description,
  //         status: TaskStatus.OPEN
  //     }
  //     this.tasks.push(task);
  //     return task;
  // }

  // deleteTask(id: string) {
  //     let taskIndex = this.tasks.findIndex(task => task.id === id);
  //     this.tasks.splice(taskIndex, 1);
  // }

  // changeStatus(id: string, status: TaskStatus) : Task {
  //     let task = this.getTaskById(id)
  //     task.status = status;
  //     return task;
  // }
}
