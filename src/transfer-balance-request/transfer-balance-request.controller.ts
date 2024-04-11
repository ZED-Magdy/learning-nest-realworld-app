import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferBalanceRequestService } from './transfer-balance-request.service';
import { CreateTransferBalanceRequestDto } from './dto/create-transfer-balance-request.dto';
import { UpdateTransferBalanceRequestDto } from './dto/update-transfer-balance-request.dto';

@Controller('transfer-balance-request')
export class TransferBalanceRequestController {
  constructor(private readonly transferBalanceRequestService: TransferBalanceRequestService) {}

  @Post()
  create(@Body() createTransferBalanceRequestDto: CreateTransferBalanceRequestDto) {
    return this.transferBalanceRequestService.create(createTransferBalanceRequestDto);
  }

  @Get()
  findAll() {
    return this.transferBalanceRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferBalanceRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransferBalanceRequestDto: UpdateTransferBalanceRequestDto) {
    return this.transferBalanceRequestService.update(+id, updateTransferBalanceRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferBalanceRequestService.remove(+id);
  }
}
