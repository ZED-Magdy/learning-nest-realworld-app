import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('brands')
@ApiTags('Brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createBrandDto: CreateBrandDto) {
    return await this.brandsService.create(createBrandDto);
  }

  @Get()
  async findAll() {
    return await this.brandsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.brandsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return await this.brandsService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.brandsService.remove(+id);
  }
}
