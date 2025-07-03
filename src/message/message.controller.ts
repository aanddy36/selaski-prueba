import { Body, Controller, Post } from '@nestjs/common';
import { PostMessageDto } from './dto/post-message.dto';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {

  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createMessage(@Body() data: PostMessageDto) {
    const newData = await this.messageService.postMessage(data);
    return {
      message: 'Mensaje creado exitósamente',
      data: newData,
    };
  }
}
