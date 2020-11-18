import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { MembersModule } from './members/members.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Admin:Aa123456@cluster0.si7to.mongodb.net/tasks?retryWrites=true&w=majority',
      { useCreatIndex: true },
    ),
    CatsModule,
    TasksModule,
    MembersModule,
  ],
})
export class AppModule {}
