import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 8080;
  const hostUrl = process.env.HOST_URL || 'http://localhost';
  app.listen(port, () =>
    console.log(`✅ Success! Server started on ${hostUrl}:${port}/graphql 🚀`),
  );
}
bootstrap();
