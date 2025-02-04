import { Injectable } from '@nestjs/common'
import { PrismaService } from 'prisma/prisma.service'
import {
	BidCreateDTO,
	IAllBidData,
	IAllProductData,
	ProductCreateDTO,
	UpdateData,
} from './dto/product-data.dto'

@Injectable()
export class ProductDataService {
	constructor(private prisma: PrismaService) {}

	findAll() {
		return this.prisma.adminProductData.findMany()
	}

	createAll(dto: ProductCreateDTO) {
		return this.prisma.adminProductData.create({
			data: {
				name: dto.name,
				minLimit: dto?.minLimit || 0,
				maxLimit: dto?.maxLimit || 0,
				minTime: dto?.minTime || 0,
				maxTime: dto?.maxTime || 0,
			},
		})
	}

	getBids() {
		return this.prisma.adminBidData.findMany()
	}

	createBids(dto: BidCreateDTO) {
		return this.prisma.adminBidData.create({
			data: {
				name: dto.name,
				bid: dto?.bid || 1,
			},
		})
	}

	updateData(dto: UpdateData) {
		const updateProduct = async ({
			name,
			minLimit,
			maxLimit,
			maxTime,
			minTime,
		}: IAllProductData) => {
			return await this.prisma.adminProductData.update({
				where: {
					name: name
				},
				data: {
					minLimit: minLimit,
					maxLimit: maxLimit,
					minTime: minTime,
					maxTime: maxTime
				},
			})
		}

		const updateBid = async ({name, bid}: IAllBidData) => {
			return await this.prisma.adminBidData.update({
				where: {
					name: name,
				},
				data: {
					bid: bid,
				},
			})
		}

		dto.productdata.forEach(value => {
			updateProduct(value)
		})

		dto.biddata.forEach(value => {
			updateBid(value)
		})
	}

	async getAll() {
		const productAll = await this.prisma.adminProductData.findMany()
		const bidsAll = await this.prisma.adminBidData.findMany()
		return {productAll, bidsAll}
	}
}
