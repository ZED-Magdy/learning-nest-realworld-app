import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Scooter Rides API')
    .setDescription('An API to manage scooter rides')
    .setVersion('1.0')
    .build();
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
