import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PlaceDto } from './dto/place.dto';

@Controller('places')
@ApiTags('Places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  @ApiCreatedResponse({ type: PlaceDto })
  @ApiBadRequestResponse({ description: 'Bad Request', schema: { example: { statusCode: 400, message: 'Bad Request', error: 'Price List not found' } } })
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  @ApiOkResponse({ type: [PlaceDto] })
  findAll() {
    return this.placesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PlaceDto })
  @ApiNotFoundResponse({ description: 'Not Found', schema: { example: { statusCode: 404, message: 'Not Found' } } })
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PlaceDto })
  @ApiNotFoundResponse({ description: 'Not Found', schema: { example: { statusCode: 404, message: 'Not Found' } } })
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(+id, updatePlaceDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted' })
  @ApiNotFoundResponse({ description: 'Not Found', schema: { example: { statusCode: 404, message: 'Not Found' } } })
  remove(@Param('id') id: string) {
    return this.placesService.remove(+id);
  }
}
