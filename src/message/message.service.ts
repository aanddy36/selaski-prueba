import { Injectable } from '@nestjs/common';
import { Message, PrismaClient } from '@prisma/client';
import { PostMessageDto } from './dto/post-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async postMessage(msg: PostMessageDto): Promise<Message> {
    const newMessage: Message = await this.prisma.message.create({ data: msg });
    return newMessage;
  }
}
