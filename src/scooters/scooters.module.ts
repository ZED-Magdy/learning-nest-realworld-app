import { Module } from '@nestjs/common';
import { ScootersService } from './scooters.service';
import { ScootersController } from './scooters.controller';
import { Scooter } from './entities/scooter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ScootersController],
  providers: [ScootersService],
  imports: [
    TypeOrmModule.forFeature([Scooter]),
  ],
})
export class ScootersModule {}
