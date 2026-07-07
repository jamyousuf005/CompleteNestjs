import { Injectable,NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class tokenMiddleware implements NestMiddleware{
      private readonly validTokens:string []=[
        "randomToken1",
        "randomToken2",
        "randomToken3"
      ]

      private isValidToken(token:string):boolean{
         return this.validTokens.includes(token)
      }
    use(req: any, res: any, next: NextFunction) {
          const token= req.headers.authorization;

          if(!token || !this.isValidToken(token)){
            return res.status(401).json({message:"Unauthorized"})
          }

          req["token"]=token;
          next() 
    }
}