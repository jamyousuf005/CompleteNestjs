import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestDetailsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const requestData = {
      method: req.method,
      url: req.url,
      body: req.body,
      userAgent: req.headers['user-agent'],
      contentType: req.headers['content-type'],
    };

    return res.json(requestData);
}
}