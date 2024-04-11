import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { Place } from './entities/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
  imports: [
    TypeOrmModule.forFeature([Place]),
  ],
})
export class PlacesModule {}
