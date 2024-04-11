import { Injectable } from '@nestjs/common';
import { CreateTransferBalanceRequestDto } from './dto/create-transfer-balance-request.dto';
import { UpdateTransferBalanceRequestDto } from './dto/update-transfer-balance-request.dto';

@Injectable()
export class TransferBalanceRequestService {
  create(createTransferBalanceRequestDto: CreateTransferBalanceRequestDto) {
    return 'This action adds a new transferBalanceRequest';
  }

  findAll() {
    return `This action returns all transferBalanceRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transferBalanceRequest`;
  }

  update(id: number, updateTransferBalanceRequestDto: UpdateTransferBalanceRequestDto) {
    return `This action updates a #${id} transferBalanceRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} transferBalanceRequest`;
  }
}
