import { MiddlewareConsumer, Module } from '@nestjs/common';
// import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './cats/logger.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Admin:Aa123456@cluster0.si7to.mongodb.net/cats?retryWrites=true&w=majority',
    ),
    CatsModule,
  ],
})

// @Module({
//   imports: [TasksModule]
// })
export class AppModule {}
