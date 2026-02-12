import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Inventory SCM API')
    .setDescription('API documentation for Inventory SCM system')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.use(cookieParser());

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
