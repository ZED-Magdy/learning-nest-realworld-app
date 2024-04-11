import { Module } from '@nestjs/common';
import { RidesService } from './rides.service';
import { RidesController } from './rides.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ride } from './entities/ride.entity';

@Module({
  controllers: [RidesController],
  providers: [RidesService],
  imports: [
    TypeOrmModule.forFeature([Ride]),
  ],
})
export class RidesModule {}
