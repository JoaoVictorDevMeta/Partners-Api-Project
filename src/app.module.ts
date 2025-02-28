import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EventsModule, SpotsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
