import { PartialType } from '@nestjs/swagger';
import { CreateTransferBalanceRequestDto } from './create-transfer-balance-request.dto';

export class UpdateTransferBalanceRequestDto extends PartialType(CreateTransferBalanceRequestDto) {}
