import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';

@Module({
  controllers: [ZonesController],
  providers: [ZonesService],
  imports: [
    TypeOrmModule.forFeature([Zone]),
  ],
})
export class ZonesModule {}
