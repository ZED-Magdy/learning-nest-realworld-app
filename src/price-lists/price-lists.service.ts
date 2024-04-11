import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreatePriceListDto } from './dto/create-price-list.dto';
import { UpdatePriceListDto } from './dto/update-price-list.dto';
import { PriceList } from './entities/price-list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceListDto } from './dto/price-list.dto';

@Injectable()
export class PriceListsService {
  constructor(
    @InjectRepository(PriceList)
    private priceListRepository: Repository<PriceList>,
  ) {}
  async create(createPriceListDto: CreatePriceListDto) {
    try {
      const priceList = this.priceListRepository.create({
        name_ar: createPriceListDto.name_ar,
        name_en: createPriceListDto.name_en,
        minute_cost: createPriceListDto.minute_cost,
        starting_cost: createPriceListDto.starting_cost,
      });
      await this.priceListRepository.save(priceList);

      return new PriceListDto(priceList);
    } catch (error) {
      throw new HttpException("Price list name must be unique", 400);
    }
  }

  async findAll() {
    const priceLists = await this.priceListRepository.find();
    return priceLists.map((priceList) => new PriceListDto(priceList));
  }

  async findOne(id: number) {
    const priceList = await this.priceListRepository.findOneBy({
      id: id,
    });
    if (!priceList) {
      throw new HttpException("Price list not found", 404);
    }
    return new PriceListDto(priceList);
  }

  async update(id: number, updatePriceListDto: UpdatePriceListDto) {
    const priceList = await this.priceListRepository.findOneBy({
      id: id,
    });

    if (!priceList) {
      throw new HttpException("Price list not found", 404);
    }

    if(updatePriceListDto.name_ar){
      priceList.name_ar = updatePriceListDto.name_ar;
    }
    if(updatePriceListDto.name_en){
      priceList.name_en = updatePriceListDto.name_en;
    }
    if(updatePriceListDto.minute_cost){
      priceList.minute_cost = updatePriceListDto.minute_cost;
    }
    if(updatePriceListDto.starting_cost){
      priceList.starting_cost = updatePriceListDto.starting_cost;
    }

    await this.priceListRepository.save(priceList);

    return new PriceListDto(priceList);
  }

  async remove(id: number) {
    const priceList = await this.priceListRepository.findOneBy({
      id: id,
    });

    if (!priceList) {
      throw new HttpException("Price list not found", 404);
    }

    await this.priceListRepository.remove(priceList);

    return { message: "Price list deleted successfully" };
  }
}
