import { Product } from './products.model';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Header, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    constructor(private ProductsService: ProductsService) { }

    @Get()
    getProducts() {
        return this.ProductsService.getProducts() //response type object ==>application/json
    }

    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.ProductsService.getProduct(id);
    }

    @Post()
    addProducts(
        @Body('title') pTitle: string,
        @Body('description') pDesc: string,
        @Body('price') pPrice: number
    ) {
        const returnId = this.ProductsService.insertProduct(pTitle, pDesc, pPrice)
        return { id: returnId }
    }

    @Put(':id')
    updateProducts(@Param('id') id: string, @Body() productData: Product) {
        const updatedProduct = this.ProductsService.updateProduct(id, productData);
        return updatedProduct;
    }

    @Patch(':id')
    partialUpdate(@Param('id') id: string, @Body()
    productData: Product) {
        const updatedProduct = this.ProductsService.partialUpdate(id, productData);
        return updatedProduct
    }

    @Delete(':id')
    deleteProduct(@Param('id') id:string){
        this.ProductsService.removeProduct(id)
        return {message:"product removed successfully"};
    }
}


