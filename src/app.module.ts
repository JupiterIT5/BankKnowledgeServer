import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller'
import { ContentController } from './content/content.controller'
import { UserService } from './user/user.service'
import { ContentService } from './content/content.service'
import { PrismaClient } from '@prisma/client'
import { PrismaService } from 'prisma/prisma.service'

@Module({
  imports: [PrismaClient],
  controllers: [AppController, UserController, ContentController],
  providers: [AppService, UserService, ContentService, PrismaService],
})
export class AppModule {}
