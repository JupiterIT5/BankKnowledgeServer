import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentCreateDTO } from './dto/content.dto'

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.contentService.findOne(name)
  }

  @Post()
  createOne(@Body() dto: ContentCreateDTO) {
    return this.contentService.createOne(dto)
  }
}
