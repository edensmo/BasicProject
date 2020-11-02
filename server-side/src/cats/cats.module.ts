// import { CorsMiddleware } from '@nest-middlewares/cors';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
// import { LoggerMiddleware } from './logger.middleware';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(CorsMiddleware,LoggerMiddleware).forRoutes(CatsController);
  // }
}
