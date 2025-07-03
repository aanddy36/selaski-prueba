import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostUserDto } from './dto/post-user.dto';
import { UserService } from './user.service';
import { Message, User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/messages')
  async getMessagesOfUser(@Param('id') id: string) {
    const messages: Message[] = await this.userService.getMessagesOfUser(id);
    return {
      message: `Mensajes del usuario extraídos exitósamente`,
      data: messages,
    };
  }

  @Post()
  async createUser(@Body() data: PostUserDto) {
    const newUser: User = await this.userService.createUser(data);
    return {
      message: 'Usuario creado exitósamente',
      data: newUser,
    };
  }
}
