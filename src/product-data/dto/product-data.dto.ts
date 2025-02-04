import { IsArray, IsInt, IsNumber, IsString } from 'class-validator'

export class ProductCreateDTO {
	@IsString()
	name: string

	@IsInt()
	minLimit?: number

	@IsInt()
	maxLimit?: number

	@IsInt()
	minTime?: number

	@IsInt()
	maxTime?: number
}

export class BidCreateDTO {
	@IsString()
	name: string

	@IsNumber() 
	bid: number
}

export interface IAllProductData {
	name: string
	minLimit: number
	maxLimit: number
	minTime: number
	maxTime: number
}

export interface IAllBidData {
	name: string
	bid: number
}

export class UpdateData {
	@IsArray()
	biddata: IAllBidData[]

	@IsArray()
	productdata: IAllProductData[]
}