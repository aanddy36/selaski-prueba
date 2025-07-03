import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, MessageModule, PrismaModule],
})
export class AppModule {}
