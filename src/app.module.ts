import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',            // Vì Pro dùng phpMyAdmin nên chọn mysql
      host: 'localhost',        // Chạy máy local thì để localhost
      port: 3306,               // Cổng mặc định của MySQL/MariaDB
      username: 'root',         // User mặc định của XAMPP thường là root
      password: '',             // XAMPP thường để trống mật khẩu, nếu Pro có đặt thì điền vào
      database: 'webtech',      // Tên database Pro vừa tạo lúc nãy
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,       // Đặt false vì Pro đã tự tay dựng bảng bằng SQL rồi (An toàn hơn)
      logging: true,            // Bật lên để Pro soi được câu lệnh SQL chạy dưới Terminal
    }),
    ProductsModule,
  ],
})
export class AppModule { }