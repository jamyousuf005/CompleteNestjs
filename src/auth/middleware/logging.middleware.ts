import { Injectable, NestMiddleware, Next } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LogggingMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
         console.log(`[${new Date().toISOString}]`)

         Next()
    }
}