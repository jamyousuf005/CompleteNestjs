import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { User2Service } from 'src/services/user2/user2.service';

@Controller('user')
export class UserController {
    constructor(private readonly user2Service:User2Service){}
    @Get('users')
    @UseGuards(AuthGuard)
    getUsers(){
        return this.user2Service.getUsers()
    }
}
