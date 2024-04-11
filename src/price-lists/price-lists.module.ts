import { Module } from '@nestjs/common';
import { PriceListsService } from './price-lists.service';
import { PriceListsController } from './price-lists.controller';

@Module({
  controllers: [PriceListsController],
  providers: [PriceListsService],
})
export class PriceListsModule {}
