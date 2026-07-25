import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryDto } from "../common/dto/query.dto";
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User | null>;
    findAll(queryDto: QueryDto, isActive?: boolean): Promise<Pagination<User> | null>;
    findOne(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: string): Promise<User | null>;
    updateProfile(id: string, profile: string): Promise<User>;
}
