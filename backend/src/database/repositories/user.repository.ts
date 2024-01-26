import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { UserDto } from "../dto/userDto.dto";
import { optionalUserDto } from "../dto/optionalUserDto.dto";
import { identity } from "rxjs";

@Injectable()
export class UserRepo {
    constructor(@InjectRepository(User)
    public UserRepo: Repository<User>) { }

    findUsers() {
        return this.UserRepo.find();
    }

    async findOneUser(Id) {
        return await this.UserRepo.findOne({ where: Id });
    }

    createUser(user: UserDto) {
        const new_user = this.UserRepo.create(user);
        return this.UserRepo.save(new_user)
    }

    async updateUser(id_param: string, user: optionalUserDto) {
        const updated_user = await this.UserRepo.preload({
            Id: +id_param,
            ...user,
        })
    }

    async removeUser(id: string) {
        const user = await this.findOneUser(id)
        return this.UserRepo.remove(user)
    }

}