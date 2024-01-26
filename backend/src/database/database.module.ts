import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./entities/user.entity";
import { UserRepo } from "./repositories/user.repository";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "Tijaguar44",
            database: "postgres",
            autoLoadEntities: true,
            synchronize: true
        }), TypeOrmModule.forFeature([User])
    ],
    providers: [UserRepo],
    exports: [UserRepo]
})
export class Database { }