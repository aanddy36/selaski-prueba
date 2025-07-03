import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostUserDto } from './dto/post-user.dto';
import { Message, User } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async getMessagesOfUser(userId: string): Promise<Message[]> {
    const messages: Message[] = await this.prisma.message.findMany({
      where: { userId },
    });
    return messages;
  }

  async createUser(user: PostUserDto): Promise<User> {
    const newUser: User = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
    return newUser;
  }
}
