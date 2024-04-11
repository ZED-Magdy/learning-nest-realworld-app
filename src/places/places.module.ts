import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { Place } from './entities/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceList } from 'src/price-lists/entities/price-list.entity';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
  imports: [
    TypeOrmModule.forFeature([Place, PriceList]),
  ],
})
export class PlacesModule {}
