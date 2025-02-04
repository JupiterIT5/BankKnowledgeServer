import { Module } from '@nestjs/common';
import { ProductDataService } from './product-data.service';
import { ProductDataController } from './product-data.controller';
import { PrismaService } from 'prisma/prisma.service'

@Module({
  controllers: [ProductDataController],
  providers: [ProductDataService, PrismaService],
})
export class ProductDataModule {}
