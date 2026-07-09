import { User2Service } from './../../services/user2/user2.service';
import { UserService } from 'src/services/user/user.service';
import { CanActivate, ExecutionContext, Injectable, Controller, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppController } from 'src/app.controller';
import { UserapiService } from 'src/services/userapi/userapi.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userapiservice:UserapiService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {


    // const controller = context.getClass();
    // if(controller!==AppController){
    //   throw new UnauthorizedException('this route is only accessible from AppController')
    // }

    const req = context.switchToHttp().getRequest();
    const apiKey=req.headers?.api_key;
    const user=this.userapiservice.getUser(apiKey)
    if(!user){
      throw new UnauthorizedException("Invalid api key")
    }
    req.user=user;
    // return req.headers?.authorization==="Valid_Token"
        return true;

  }
}
