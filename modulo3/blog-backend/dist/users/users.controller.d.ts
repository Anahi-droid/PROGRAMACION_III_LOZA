import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryDto } from "../common/dto/query.dto";
import { SuccessResponseDto } from "../common/dto/response.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<SuccessResponseDto<import("./users.entity").User | null>>;
    findAll(query: QueryDto): Promise<SuccessResponseDto<import("nestjs-typeorm-paginate").Pagination<import("./users.entity").User, import("nestjs-typeorm-paginate").IPaginationMeta> | null>>;
    findOne(id: string): Promise<SuccessResponseDto<import("./users.entity").User>>;
    update(id: string, dto: UpdateUserDto): Promise<SuccessResponseDto<import("./users.entity").User>>;
    remove(id: string): Promise<SuccessResponseDto<import("./users.entity").User>>;
    uploadProfile(id: string, file: Express.Multer.File): Promise<SuccessResponseDto<import("./users.entity").User>>;
}
