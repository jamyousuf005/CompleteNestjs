import { Injectable, NestMiddleware, Header } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ContentTypeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {

    const contentType = req.headers['content-type']
    if(!contentType){
      return res.status(400).json({msg:"content type is missing"})
    }
    if(contentType!="application/json"){
     return res.status(415).json({msg:"unsupported media type. only application/json is supported"})
    }
    next();
  }
}
