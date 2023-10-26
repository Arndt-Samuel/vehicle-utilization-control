import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { plateExists } from './middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(plateExists);
  await app.listen(3000);
}
bootstrap();
