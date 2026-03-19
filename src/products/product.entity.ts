import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products') // Phải khớp 100% tên bảng trong database
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column('decimal', { precision: 18, scale: 2 })
    price: number;

    @Column({ name: 'discount_percent', default: 0 })
    discountPercent: number;

    @Column()
    thumbnail: string;

    @Column({ name: 'short_description' })
    shortDescription: string;

    @Column({ name: 'is_featured', type: 'tinyint' })
    isFeatured: number;

    @Column({ name: 'created_at' })
    createdAt: Date;
}