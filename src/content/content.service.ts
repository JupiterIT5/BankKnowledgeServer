import { Injectable } from '@nestjs/common'
import { PrismaService } from 'prisma/prisma.service'
import { ContentCreateDTO } from './dto/content.dto'

@Injectable()
export class ContentService {
	constructor(private prisma: PrismaService) {}

	findOne(name: string) {
		return this.prisma.content.findFirst({
			where: {
				name
			}
		})
	}

	createOne(dto: ContentCreateDTO) {
		return this.prisma.content.create({
			data: dto
		})
	}
}
