import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../providers/users.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService) { }

    @Get()
    async findAll(): Promise<any> {
        return await this.userService.findAll();
    }
}
