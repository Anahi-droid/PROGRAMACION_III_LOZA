import { AppService } from './app.service';
import { ProductDto } from './product.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './users/users.entity';
export declare class AppController {
    private readonly appService;
    usersService: any;
    constructor(appService: AppService);
    getHeath(): any;
    createProduct(product: ProductDto): any;
    findAll(page?: number, limit?: number): Promise<Pagination<User>>;
    update(id: string, updatedProduct: ProductDto): any;
    deleteById(id: string): ProductDto;
    areaTriangulo(data: any): any;
}
