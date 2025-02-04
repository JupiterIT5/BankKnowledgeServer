import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAuthDTO, UserCreateDTO, UserUpdateDTO } from './dto/user.dto'

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/authUser')
  authUser(@Body() dto: UserAuthDTO) {
    return this.userService.authUser(dto)
  }

  @Get('/authUserLogin/:login')
  authUserLogin(@Param('login') login: string) {
    return this.userService.authUserLogin(login)
  }

  @Post('/create')
  createUser(@Body() dto: UserCreateDTO) {
    return this.userService.createUser(dto)
  }

  @Get('/getUsers')
  getUsers() {
    return this.userService.getUsers()
  }

  @Post('/updAdmin/:login')
  updadmin(@Body() dto: UserUpdateDTO, @Param('login') login: string) {
    return this.userService.updAdmin(dto, login)
  }
}
