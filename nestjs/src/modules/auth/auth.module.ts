import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { AuthController } from './domain/auth.controller';
import { UsersService } from './providers/users.service';


@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UsersService],
    controllers: [AuthController]
})
export class AuthModule {
    constructor(private dataSource: DataSource) { }
}
