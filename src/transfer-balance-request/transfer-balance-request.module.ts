import { Module } from '@nestjs/common';
import { TransferBalanceRequestService } from './transfer-balance-request.service';
import { TransferBalanceRequestController } from './transfer-balance-request.controller';

@Module({
  controllers: [TransferBalanceRequestController],
  providers: [TransferBalanceRequestService],
})
export class TransferBalanceRequestModule {}
