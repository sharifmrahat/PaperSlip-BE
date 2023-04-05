import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.listen(3000, () =>
    console.log(
      ' ✅ Success! Server started on http://localhost:3000/graphql 🚀',
    ),
  );
}
bootstrap();
