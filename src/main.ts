import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật CORS để Frontend gọi được API
  app.enableCors();

  // LẤY PORT TỰ ĐỘNG TỪ RAILWAY (QUAN TRỌNG)
  const port = process.env.PORT || 3001;

  // Phải có '0.0.0.0' để Railway thông luồng được
  await app.listen(process.env.PORT || 3001, '0.0.0.0');


}
bootstrap();