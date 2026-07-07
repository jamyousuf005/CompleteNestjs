import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TimeStampMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('TimeStampMiddleware');
    console.log(new Date().toISOString());

    next();
  }
}