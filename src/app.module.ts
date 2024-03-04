import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { [cats]Controller } from './[cats]/[cats].controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, [cats]Controller, CatsController],
  providers: [AppService],
})
export class AppModule {}
