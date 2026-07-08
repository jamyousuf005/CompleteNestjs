
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as bcrypt  from 'bcrypt'
import { UserDto } from 'src/UserDto/user.dto';
import { UserService } from 'src/services/user/user.service';

@Injectable()
export class UserLoggingMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserService) {}

 async use(req: Request, res: Response, next: NextFunction) {
    if (req.body && req.body.name) {
      req.body.name = req.body.name.toUpperCase()
    }
    if (req.body && req.body.name && req.body.password) {

      const hashedPassword =await bcrypt.hash(req.body.password, 10)
      const createUserDto: UserDto = {
        name: req.body.name,
        password: hashedPassword,
        createdAt:new Date().toISOString(),
      };
    this.userService.createUser(createUserDto)
      
    }
    
    next();
  }
}
