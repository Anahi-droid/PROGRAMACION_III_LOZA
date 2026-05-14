import { Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }

  @Post("/products")
  createProduct(@Body() product: ProductDto): any {
    return this.appService.createProduct(product);
  }

  @Get("/products/:id")
  findAll(): ProductDto[] { 
    return this.appService.findAll();
  }

}