import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDataService } from './product-data.service';
import { BidCreateDTO, ProductCreateDTO, UpdateData } from './dto/product-data.dto'

@Controller('product-data')
export class ProductDataController {
  constructor(private readonly productDataService: ProductDataService) {}

  @Get('/getproduct')
  findAll() {
    return this.productDataService.findAll()
  }

  @Get('/getbids')
  findBidsAll() {
    return this.productDataService.getBids()
  }

  @Get('/getall')
  getAll() {
    return this.productDataService.getAll()
  }

  @Post('/createproduct')
  createProduct(@Body() dto: ProductCreateDTO) {
    return this.productDataService.createAll(dto)
  }

  @Post('/createbid')
  createBid(@Body() dto: BidCreateDTO) {
    return this.productDataService.createBids(dto)
  }

  @Post('/updatedata')
  updateData(@Body() dto: UpdateData) {
    return this.productDataService.updateData(dto)
  }
}
