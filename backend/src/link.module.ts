import { Module } from '@nestjs/common';
import { AppController } from './app/controller/app.controller';
import { Database } from './database/database.module';
import { AppModule } from './app/modules/app.module';

@Module({
    imports: [AppModule, Database],
    controllers: [AppController],
    providers: [],
})
export class LinkModule { }
