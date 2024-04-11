import { HttpException, Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './entities/place.entity';
import { Repository } from 'typeorm';
import { PlaceDto } from './dto/place.dto';
import { PolygonDto } from 'src/common/dto/polygon.dto';
import { PriceListDto } from 'src/price-lists/dto/price-list.dto';
import { PriceList } from 'src/price-lists/entities/price-list.entity';
import { parseFromWK } from 'wkt-parser-helper';

@Injectable()
export class PlacesService {

  constructor(
    @InjectRepository(Place)
    private repository: Repository<Place>,
    @InjectRepository(PriceList)
    private priceListRepository: Repository<PriceList>,
  ) {}

  async create(createPlaceDto: CreatePlaceDto) {
    const priceList = await this.priceListRepository.findOneBy({id: createPlaceDto.price_list_id});
    if (!priceList) {
      throw new HttpException('Price list not found', 404);
    }
    console.log(parseFromWK(createPlaceDto.wkt_string).coordinates);
    const place = this.repository.create({
      name_ar: createPlaceDto.name_ar,
      name_en: createPlaceDto.name_en,
      color: createPlaceDto.color,
      z_index: createPlaceDto.z_index,
      price_list: priceList,
      area: createPlaceDto.wkt_string,
    });
    await this.repository.save(place);

    return new PlaceDto(
      place.id,
      place.name_ar,
      place.name_en,
      new PolygonDto(place.area),
      place.color,
      place.z_index,
      new PriceListDto(place.price_list),
    );
  }

  async findAll() {
    return (await this.repository.find({
      relations: ['price_list'],
    })).map(place => new PlaceDto(
      place.id,
      place.name_ar,
      place.name_en,
      new PolygonDto(place.area),
      place.color,
      place.z_index,
      new PriceListDto(place.price_list),
    ));
  }

  async findOne(id: number) {
    const place = await this.repository.findOne({
      where:{id: id},
      relations: ['price_list'],
    });
    if (!place) {
      throw new HttpException('Place not found', 404);
    }
    return new PlaceDto(
      place.id,
      place.name_ar,
      place.name_en,
      new PolygonDto(place.area),
      place.color,
      place.z_index,
      new PriceListDto(place.price_list),
    );
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
