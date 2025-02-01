import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaClient } from '@prisma/client'

@Module({
  controllers: [ContentController, PrismaClient],
  providers: [ContentService],
})
export class ContentModule {}
