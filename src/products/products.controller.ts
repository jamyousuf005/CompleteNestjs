import { Controller, Get, Header } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    @Header('Content-type','text/html') // ffor changing the type of response in th request
    getProducts():any{
       return{message : "products fetched"}; //response type object ==>application/json
    }
}
    