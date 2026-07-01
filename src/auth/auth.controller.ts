import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    @UsePipes(ValidationPipe)
    registerUser(@Body() userData : AuthDto){
        return {
            name : `${userData.name}`,
            email : `${userData.email}`,
            country: `${userData.country}`, 
            date: `${userData.dob}`   
        }
    }
}
