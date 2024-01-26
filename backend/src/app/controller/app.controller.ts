import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { UserRepo } from 'src/database/repositories/user.repository';
import { UserDto } from 'src/database/dto/userDto.dto';

@Controller("/api")
export class AppController {
  constructor(
    private readonly userRepo: UserRepo
  ) { }


  @Get("/users")
  getUsers() {
    return this.userRepo.findUsers();
  }


  @Get("/user")
  getUser(@Query("id") id) {
    console.log(id)
    return this.userRepo.findOneUser(id);
  }

  @Post("/user/create")
  createUser(@Query() user: UserDto) {
    return this.userRepo.createUser(user);
  }

  @Delete("/user/delete")
  deleteUser(@Query() id) {

    return this.userRepo.removeUser(id);
  }
}
