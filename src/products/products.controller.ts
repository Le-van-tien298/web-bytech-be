import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products') // Đường dẫn: /products
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    getAllProducts() {
        return this.productsService.findAll();
    }

    @Get(':slug')
    async getProductDetail(@Param('slug') slug: string) {
        const product = await this.productsService.findBySlug(slug);

        // Nếu product là null, quăng lỗi 404 ngay tại đây
        if (!product) {
            throw new NotFoundException(`Sản phẩm với slug ${slug} không tồn tại!`);
        }

        return product;
    }
}