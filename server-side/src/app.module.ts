import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Admin:Aa123456@cluster0.si7to.mongodb.net/tasks?retryWrites=true&w=majority',
    ),
    CatsModule,
    TasksModule
  ],
})

export class AppModule {}
