import { Test, TestingModule } from '@nestjs/testing';
import { TransferBalanceRequestService } from './transfer-balance-request.service';

describe('TransferBalanceRequestService', () => {
  let service: TransferBalanceRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransferBalanceRequestService],
    }).compile();

    service = module.get<TransferBalanceRequestService>(TransferBalanceRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
