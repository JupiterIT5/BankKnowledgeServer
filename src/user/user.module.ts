import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaClient } from '@prisma/client'
import { PrismaService } from 'prisma/prisma.service'

@Module({
  controllers: [UserController, PrismaClient],
  providers: [UserService, PrismaService],
})
export class UserModule {}
