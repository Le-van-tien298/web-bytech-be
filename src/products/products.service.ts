import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    // Lấy tất cả sản phẩm cho trang chủ
    async findAll(): Promise<Product[]> {
        return await this.productRepository.find({
            order: { createdAt: 'DESC' }, // Mới nhất hiện lên đầu
        });
    }

    // Nếu Pro chỉ muốn hiện hàng "Nổi bật" ở Banner
    async findFeatured(): Promise<Product[]> {
        return await this.productRepository.find({
            where: { isFeatured: 1 },
        });
    }

    async findBySlug(slug: string): Promise<Product | null> {
        return await this.productRepository.findOne({ where: { slug } });
    }
}