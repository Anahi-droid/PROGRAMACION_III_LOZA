import { ProductDto } from './product.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { User } from './users/users.entity';
export declare class AppService {
    private products;
    userRepository: any;
    getHeath(): any;
    createProduct(product: ProductDto): ProductDto;
    findAll(options: IPaginationOptions): Promise<Pagination<User>>;
    findById(id: string): ProductDto[];
    update(id: string, updatedProduct: ProductDto): any;
    deleteById(id: string): any;
    areaTriangulo(data: any): any;
}
