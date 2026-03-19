import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Nhớ bật cái này để Frontend gọi được nhé

  // Render cấp port qua biến process.env.PORT
  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0'); // Thêm '0.0.0.0' để Render nhận diện
}
bootstrap();
