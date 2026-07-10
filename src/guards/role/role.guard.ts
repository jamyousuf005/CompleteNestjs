import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req= context.switchToHttp().getRequest()
    const role=req.headers?.role;
    if(role!=="admin"){
      throw new ForbiddenException('Acess denied for non admin users')
    }
    return true;
  }
}
