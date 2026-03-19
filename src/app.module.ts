import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, // PHẢI DÙNG BIẾN NÀY
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
      extra: {
        connectionLimit: 5, // Giới hạn số kết nối để Railway không bị ngộp
        waitForConnections: true,
        connectTimeout: 20000, // Tăng thời gian chờ kết nối lên 20 giây
      },
    }),
    ProductsModule,
  ],
})
export class AppModule { }