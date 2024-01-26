import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules/app.module';
import { LinkModule } from './link.module';

async function bootstrap() {
  const app = await NestFactory.create(LinkModule);
  await app.listen(3000);
}
bootstrap();
