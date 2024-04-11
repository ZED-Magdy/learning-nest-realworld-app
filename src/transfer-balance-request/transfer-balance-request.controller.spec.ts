import { Test, TestingModule } from '@nestjs/testing';
import { TransferBalanceRequestController } from './transfer-balance-request.controller';
import { TransferBalanceRequestService } from './transfer-balance-request.service';

describe('TransferBalanceRequestController', () => {
  let controller: TransferBalanceRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferBalanceRequestController],
      providers: [TransferBalanceRequestService],
    }).compile();

    controller = module.get<TransferBalanceRequestController>(TransferBalanceRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
