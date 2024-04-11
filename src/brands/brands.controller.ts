import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BrandDto } from './dto/brand.dto';

@Controller('brands')
@ApiTags('Brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse({ description: 'Brand created successfully', 
    schema:{
      example: {
        id: 1,
        name_ar: 'ماركة 1',
        name_en: 'Brand 1'
      },
    }
  })
  @ApiBadRequestResponse({ description: 'Bad request', schema:{
    example: {
      statusCode: 400,
      message: 'Brand name must be unique',
      error: 'Bad Request'
    }
  } })
  async create(@Body() createBrandDto: CreateBrandDto) {
    return await this.brandsService.create(createBrandDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Brands fetched successfully', 
    schema:{
      example: [
        {
          id: 1,
          name_ar: 'ماركة 1',
          name_en: 'Brand 1'
        },
        {
          id: 2,
          name_ar: 'ماركة 2',
          name_en: 'Brand 2'
        }
      ],
    }
  })
  async findAll() {
    return await this.brandsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Brand fetched successfully', 
    schema:{
      example: {
        id: 1,
        name_ar: 'ماركة 1',
        name_en: 'Brand 1'
      },
    }
  })
  @ApiNotFoundResponse({ description: 'Brand not found', schema:{
      example: {
        statusCode: 404,
        message: 'Brand not found',
        error: 'Not Found'
      }
    }
  })
  async findOne(@Param('id') id: string) {
    return await this.brandsService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOkResponse({ description: 'Brand updated successfully', 
    schema:{
      example: {
        id: 1,
        name_ar: 'ماركة 1',
        name_en: 'Brand 1'
      },
    }
  })
  @ApiNotFoundResponse({ description: 'Brand not found', schema:{
      example: {
        statusCode: 404,
        message: 'Brand not found',
        error: 'Not Found'
      }
    }
  })
  async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return await this.brandsService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Brand deleted successfully', 
    schema:{
      example: {
        message: 'Brand deleted successfully'
      },
    }
  })
  @ApiNotFoundResponse({ description: 'Brand not found', schema:{
      example: {
        statusCode: 404,
        message: 'Brand not found',
        error: 'Not Found'
      }
    }
  })
  async remove(@Param('id') id: string) {
    return await this.brandsService.remove(+id);
  }
}
