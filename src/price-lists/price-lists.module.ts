import { Module } from '@nestjs/common';
import { PriceListsService } from './price-lists.service';
import { PriceListsController } from './price-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceList } from './entities/price-list.entity';

@Module({
  controllers: [PriceListsController],
  providers: [PriceListsService],
  imports: [
    TypeOrmModule.forFeature([PriceList]),
  ],
})
export class PriceListsModule {}
