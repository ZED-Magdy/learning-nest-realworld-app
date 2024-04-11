import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { PriceListsService } from './price-lists.service';
import { CreatePriceListDto } from './dto/create-price-list.dto';
import { UpdatePriceListDto } from './dto/update-price-list.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PriceListDto } from './dto/price-list.dto';

@Controller('price-lists')
@ApiTags('PriceLists')
export class PriceListsController {
  constructor(private readonly priceListsService: PriceListsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiCreatedResponse({ type: PriceListDto, description: 'The record has been successfully created.' })
  @ApiBadRequestResponse({ description: 'Bad Request.', schema: { example: { statusCode: 400, message: 'Price list name must be unique' } }})
  async create(@Body() createPriceListDto: CreatePriceListDto) {
    return await this.priceListsService.create(createPriceListDto);
  }

  @Get()
  @ApiOkResponse({ type: [PriceListDto], description: 'List of all price lists.' })
  async findAll() {
    return await this.priceListsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PriceListDto, description: 'The record has been successfully retrieved.' })
  @ApiNotFoundResponse({ description: 'Price list not found.', schema: { example: { statusCode: 404, message: 'Price list not found' } }})
  async findOne(@Param('id') id: string) {
    return await this.priceListsService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse({ type: PriceListDto, description: 'The record has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'Price list not found.', schema: { example: { statusCode: 404, message: 'Price list not found' } }})
  @ApiBadRequestResponse({ description: 'Bad Request.', schema: { example: { statusCode: 400, message: 'Price list name must be unique' } }})
  async update(@Param('id') id: string, @Body() updatePriceListDto: UpdatePriceListDto) {
    return await this.priceListsService.update(+id, updatePriceListDto);
  }


  @Delete(':id')
  @ApiOkResponse({ description: 'The record has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Price list not found.', schema: { example: { statusCode: 404, message: 'Price list not found' } }})
  async remove(@Param('id') id: string) {
    return await this.priceListsService.remove(+id);
  }
}
