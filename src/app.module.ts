import { MiddlewareConsumer, Module, NestModule, RequestMethod, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { LogggingMiddleware } from './auth/middleware/logging.middleware';
import { tokenMiddleware } from './auth/middleware/token.middleware';
import { ContentTypeMiddleware } from './auth/middleware/content-type/content-type.middleware';
import path from 'path';
import { RequestDetailsMiddleware } from './auth/middleware/request-details/request-details.middleware';
import { TimeStampMiddleware } from './auth/middleware/time-stamp/time-stamp.middleware';
import { UserService } from './services/user/user.service';
import { UserLoggingMiddleware } from './middleware/user-logging/user-logging.middleware';

@Module({
  imports: [ProductsModule, AuthModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, UserService,UserLoggingMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {


    consumer.apply(UserLoggingMiddleware).forRoutes({path:'',method:RequestMethod.ALL})
     
    // consumer.apply(LogggingMiddleware).forRoutes("*")
    // consumer.apply(tokenMiddleware).forRoutes("*")
    // consumer.apply(ContentTypeMiddleware)
    // .exclude({
    //   path:"client/route4",
    //   method:RequestMethod.POST,
    // })
    // .forRoutes( "client/*")

    // for specific routes
    // consumer.apply(RequestDetailsMiddleware,TimeStampMiddleware).forRoutes(AppController)

    //for global routes
    // consumer.apply(RequestDetailsMiddleware,TimeStampMiddleware).forRoutes({path:"*",method:RequestMethod.ALL})
    //see main.ts for another way to make global routes-----------
    
   
  } 
}
