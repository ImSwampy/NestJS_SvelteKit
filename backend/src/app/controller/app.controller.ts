import { Controller, Get, Param, Post, Query } from '@nestjs/common';
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

  @Post("/user")
  createUser(@Query() user: UserDto) {
    return this.userRepo.createUser(user);
  }
}
