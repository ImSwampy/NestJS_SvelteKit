import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../services/app.service';
import { Database } from 'src/database/database.module';

@Module({
  imports: [Database],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppModule, AppService]
})
export class AppModule { }
