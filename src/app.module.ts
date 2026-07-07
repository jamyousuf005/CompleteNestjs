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

@Module({
  imports: [ProductsModule, AuthModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LogggingMiddleware).forRoutes("*")
    // consumer.apply(tokenMiddleware).forRoutes("*")
    consumer.apply(ContentTypeMiddleware)
    .exclude({
      path:"client/route4",
      method:RequestMethod.POST,
    })
    .forRoutes( "client/*")
  }
}
