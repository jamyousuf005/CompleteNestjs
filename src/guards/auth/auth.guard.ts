import { CanActivate, ExecutionContext, Injectable, Controller, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppController } from 'src/app.controller';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const controller = context.getClass();
    // if(controller!==AppController){
    //   throw new UnauthorizedException('this route is only accessible from AppController')
    // }

    // return true;
    const req = context.switchToHttp().getRequest();

    return req.headers?.authorization==="Valid_Token"
  }
}
