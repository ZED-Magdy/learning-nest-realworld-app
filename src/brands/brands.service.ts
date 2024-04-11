import { HttpException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidationError } from 'class-validator';
import { BrandDto } from './dto/brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    protected readonly repository: Repository<Brand>) {}
  async create(createBrandDto: CreateBrandDto) {
    try {
      const brand = this.repository.create({
        name_ar: createBrandDto.name_ar,
        name_en: createBrandDto.name_en,
      });
      await this.repository.save(brand);
      return new BrandDto(brand);
    } catch (error) {
      throw new HttpException("Brand name must be unique", 400);
    }
  }

  async findAll() {
    const brands = await this.repository.find();
    return brands.map((brand) => new BrandDto(brand));
  }

  async findOne(id: number) {
    const brand = await this.repository.findOneBy({
      id: id,
    });

    if (!brand) {
      throw new HttpException('Brand not found', 404);
    }

    return new BrandDto(brand);
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const brand = await this.repository.findOneBy({
      id: id,
    });

    if (!brand) {
      throw new HttpException('Brand not found', 404);
    }

    try {
      if (updateBrandDto.name_ar) {
        brand.name_ar = updateBrandDto.name_ar;
      }
      if (updateBrandDto.name_en) {
        brand.name_en = updateBrandDto.name_en;
      }
      await this.repository.save(brand);
      return new BrandDto(brand);
    }
    catch (error) {
      throw new HttpException("Brand name must be unique", 400);
    }
  }

  async remove(id: number) {
    const brand = this.repository.findOneBy({
      id: id,
    });

    if (!brand) {
      throw new HttpException('Brand not found', 404);
    }

    await this.repository.delete(id);

    return {
      message: 'Brand deleted successfully',
    };
  }
}
