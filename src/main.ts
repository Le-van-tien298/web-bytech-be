import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật CORS để Frontend gọi được API (Cái này Pro làm đúng rồi)
  app.enableCors();

  // LẤY PORT TỪ BIẾN MÔI TRƯỜNG
  const port = process.env.PORT || 3001;

  // CHỈNH LẠI DÒNG NÀY: Thêm console.log để mình debug trong Railway Log cho dễ
  await app.listen(port, '0.0.0.0');

  console.log(`Backend WebTech đang chạy tại Port: ${port}`);
}
bootstrap();