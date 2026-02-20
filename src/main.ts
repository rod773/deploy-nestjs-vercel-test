import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization,X-Requested-With,Accept-Language",
    optionsSuccessStatus: 204,
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

